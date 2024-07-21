import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Category } from "../../types";
import { getCategory, saveCategory } from "../../services";

const schema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),
});

type FormData = z.infer<typeof schema>;

function CategoryFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    setError,
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function fetch() {
      if (!id || id === "new") return;

      const { data: category } = await getCategory(id);

      if (!category) return navigate("/not-found");

      reset(mapToFormData(category));
    }

    fetch();
  }, []);

  function mapToFormData(category: Category): FormData {
    return {
      id: category.id,
      name: category.name,
    };
  }

  async function onSubmit(data: FormData) {
    console.log("data", data);

    try {
      await saveCategory(data);
      navigate("/categories");
    } catch (error: any) {
      if (error.response.status === 400) {
        setError("name", { message: error.response.data });
      }
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-3">Category Form {id}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3">
        <div className="mb-3 form-control">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input
            {...register("name")}
            type="name"
            placeholder="name"
            className="input input-bordered"
          />
          {errors.name && (
            <p className="text-error p-1">{errors.name.message}</p>
          )}
        </div>
        <button className="btn btn-primary mt-3" disabled={!isValid}>
          Save
        </button>
      </form>
    </div>
  );
}

export default CategoryFormPage;
