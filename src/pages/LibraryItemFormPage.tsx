import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LibraryItem } from "@types";
import { getLibraryItem, saveLibraryItem } from "@services";
import { useCategories } from "@hooks";
import { toast } from "react-toastify";

const schema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  type: z.union([
    z.literal("NOVEL"),
    z.literal("AUDIOBOOK"),
    z.literal("ENCYCLOPEDIA"),
    z.literal("DVD"),
  ]),
  author: z.string().optional(),
  nbrPages: z.coerce
    .number()
    .gt(0, { message: "Pages/Runtime is required" })
    .optional(),
  runTimeMinutes: z.coerce
    .number()
    .gt(0, { message: "Pages/Runtime is required" })
    .optional(),
  isBorrowable: z.boolean().optional(),
  borrower: z.string().optional(),
  borrowDate: z.date().optional(),
});

type FormData = z.infer<typeof schema>;

type ItemType = "DVD" | "NOVEL" | "AUDIOBOOK" | "ENCYCLOPEDIA";

const itemTypes: ItemType[] = ["DVD", "NOVEL", "AUDIOBOOK", "ENCYCLOPEDIA"];

function LibraryItemFormPage() {
  const { id } = useParams();
  const { categories } = useCategories();
  const navigate = useNavigate();
  const [borrowerState, setBorrowerState] = useState<
    "checkedIn" | "checkedOut"
  >("checkedIn");

  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function fetch() {
      if (!id || id === "new") return;

      const { data: libraryItem } = await getLibraryItem(id);

      if (!libraryItem) return navigate("/not-found");

      reset(mapToFormData(libraryItem));

      setBorrowerState(libraryItem.borrower ? "checkedOut" : "checkedIn");
    }
    fetch();
  }, []);

  function mapToFormData(libraryItem: LibraryItem): FormData {
    return {
      id: libraryItem.id,
      type: libraryItem.type as ItemType,
      title: libraryItem.title,
      categoryId: libraryItem.category.id,
      author: libraryItem.author || "",
      isBorrowable: libraryItem.isBorrowable || false,
      borrower: libraryItem.borrower || "",
      borrowDate: libraryItem.borrowDate
        ? new Date(libraryItem.borrowDate)
        : undefined,
      nbrPages: libraryItem.nbrPages || undefined,
      runTimeMinutes: libraryItem.runTimeMinutes || undefined,
    };
  }

  async function onSubmit(data: FormData) {
    try {
      if (borrowerState === "checkedIn") {
        data.borrower = "";
        data.borrowDate = undefined;
      }

      await saveLibraryItem(data);
      navigate("/books");
    } catch (error: any) {
      console.log("Failed to save the library item", error);
      toast.error("Failed to save the library item");
    }
  }

  function handleBorrowerChange(state: "checkedIn" | "checkedOut") {
    setBorrowerState(state);
    if (state === "checkedIn") {
      setValue("borrower", "");
      setValue("borrowDate", undefined);
    }
  }

  const selectedType = watch("type");
  const borrower = watch("borrower");
  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-3">Library Item Form {id}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/3">
          {/* Type Field */}
          <label className="mb-3 form-control ">
            <div className="label">
              <span className="label-text">Type</span>
            </div>
            <select {...register("type")} className="select select-bordered">
              <option />

              {itemTypes.map((types) => (
                <option key={types} value={types}>
                  {types}
                </option>
              ))}
            </select>
            {errors.type && (
              <p className="text-danger">{errors.type.message}</p>
            )}
          </label>

          {/* Title Field */}
          <div className="mb-3 form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              {...register("title")}
              type="title"
              className="input input-bordered"
            />
            {errors.title && (
              <p className="text-error p-1">{errors.title.message}</p>
            )}
          </div>

          {/* Category Field */}
          <label className="mb-3 form-control ">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              {...register("categoryId")}
              className="select select-bordered"
            >
              <option />

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <p className="text-danger">{errors.categoryId.message}</p>
            )}
          </label>

          {/* Author Field */}
          {selectedType === "NOVEL" || selectedType === "ENCYCLOPEDIA" ? (
            <div className="mb-3 form-control">
              <label className="label">
                <span className="label-text">Author</span>
              </label>
              <input
                {...register("author")}
                type="author"
                className="input input-bordered"
              />
              {errors.author && (
                <p className="text-error p-1">{errors.author.message}</p>
              )}
            </div>
          ) : null}

          {/* Pages Field */}
          {selectedType === "NOVEL" || selectedType === "ENCYCLOPEDIA" ? (
            <div className="mb-3 form-control">
              <label className="label">
                <span className="label-text">Pages</span>
              </label>
              <input
                {...register("nbrPages")}
                type="nbrPages"
                className="input input-bordered"
              />
              {errors.nbrPages && (
                <p className="text-error p-1">{errors.nbrPages.message}</p>
              )}
            </div>
          ) : null}

          {/* Runtime Field */}
          {selectedType === "DVD" || selectedType === "AUDIOBOOK" ? (
            <div className="mb-3 form-control">
              <label className="label">
                <span className="label-text">Runtime</span>
              </label>
              <input
                {...register("runTimeMinutes")}
                type="runTimeMinutes"
                className="input input-bordered"
              />
              {errors.runTimeMinutes && (
                <p className="text-error p-1">
                  {errors.runTimeMinutes.message}
                </p>
              )}
            </div>
          ) : null}

          {/* Is Borrowable Field */}
          {selectedType === "ENCYCLOPEDIA" ? (
            <div>
              <div className="badge badge-error text-white">Not Borrowable</div>
            </div>
          ) : (
            <div>
              <div className="badge badge-success">Borrowable</div>
            </div>
          )}

          {/* Check In/Check Out */}
          {selectedType !== "ENCYCLOPEDIA" && (
            <div className="form-control w-52">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <div className="flex items-center">
                <label className="cursor-pointer label">
                  <input
                    type="radio"
                    name="borrowStatus"
                    className="radio radio-primary"
                    checked={borrowerState === "checkedIn"}
                    onChange={() => handleBorrowerChange("checkedIn")}
                  />
                  <span className="label-text ml-2">Check In</span>
                </label>
                <label className="cursor-pointer label ml-4">
                  <input
                    type="radio"
                    name="borrowStatus"
                    className="radio radio-secondary"
                    checked={borrowerState === "checkedOut"}
                    onChange={() => handleBorrowerChange("checkedOut")}
                  />
                  <span className="label-text ml-2">Check Out</span>
                </label>
              </div>
            </div>
          )}

          {/* Borrower Field */}
          {selectedType !== "ENCYCLOPEDIA" &&
            borrowerState === "checkedOut" && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Borrowed By</span>
                </label>
                <input
                  {...register("borrower")}
                  type="text"
                  className="input input-bordered"
                  value={borrower || ""}
                  onChange={(e) => setValue("borrower", e.target.value)}
                />
              </div>
            )}

          <button
            type="submit"
            className="btn btn-primary mt-6"
            disabled={!isValid}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default LibraryItemFormPage;
