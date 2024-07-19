import { useNavigate, useParams } from "react-router-dom";
import { Category, getCategories } from "../../services/fakeCategoryService";
import { useEffect, useState } from "react";
import {
  getLibraryItem,
  LibraryItem,
  saveLibraryItem,
} from "../../services/fakeLibraryItem";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  type: z.union([
    z.literal("book"),
    z.literal("audiobook"),
    z.literal("encyclopedia"),
    z.literal("dvd"),
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
  isBorrowable: z.boolean().default(false),
  borrower: z.string().optional(),
  borrowDate: z.date().optional(),
});

type FormData = z.infer<typeof schema>;

type ItemType = "dvd" | "book" | "audiobook" | "encyclopedia";

const itemTypes: ItemType[] = ["dvd", "book", "audiobook", "encyclopedia"];

function LibraryItemFormPage() {
  const { id } = useParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function fetch() {
      const { data: categories } = await getCategories();
      setCategories(categories);

      if (!id || id === "new") return;

      const { data: libraryItem } = await getLibraryItem(id);

      if (!libraryItem) return navigate("/not-found");

      reset(mapToFormData(libraryItem));
    }
    fetch();
  }, []);

  function mapToFormData(libraryItem: LibraryItem): FormData {
    return {
      id: libraryItem.id,
      title: libraryItem.title,
      author: libraryItem.author,
      isBorrowable: libraryItem.isBorrowable,
      categoryId: libraryItem.category.id,
      type: libraryItem.type,
      nbrPages: libraryItem.nbrPages,
      runTimeMinutes: libraryItem.runTimeMinutes,
      borrower: libraryItem.borrower,
      borrowDate: libraryItem.borrowDate,
    };
  }

  async function onSubmit(data: FormData) {
    console.log(data);
    await saveLibraryItem(data);
    navigate("/books");
  }

  const selectedType = watch("type");

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
          {selectedType === "book" || selectedType === "encyclopedia" ? (
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
          {selectedType === "book" || selectedType === "encyclopedia" ? (
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
          {selectedType === "dvd" || selectedType === "audiobook" ? (
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
          {selectedType !== "encyclopedia" && (
            <div className="mb-3 form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Borrowable</span>
                <input
                  {...register("isBorrowable")}
                  type="checkbox"
                  className="checkbox"
                />
              </label>
            </div>
          )}

          {/* Borrower Field */}
          {selectedType !== "encyclopedia" && (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Borrowed By</span>
              </label>
              <input
                {...register("borrower")}
                type="borrower"
                className="input input-bordered"
              />
            </div>
          )}

          {/* <div>
            {!isBorrowed && (
              <button type="button" className="btn btn-primary btn-sm mt-3">
                Check Out
              </button>
            )}
            {isBorrowed && (
              <button
                type="button"
                className="btn btn-secondary btn-sm  mt-3 ml-2"
              >
                Check In
              </button>
            )}
          </div> */}

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
