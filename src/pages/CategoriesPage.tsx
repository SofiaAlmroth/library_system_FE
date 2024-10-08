import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Category, Column, SortColumn } from "@types";
import { Table } from "@components/common";
import { deleteCategory } from "@services";
import { useCategories } from "@hooks";

const DEFAULT_SORTCOLUMN: SortColumn = { path: "category", order: "asc" };

function CategoriesPage() {
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORTCOLUMN);
  const { categories, setCategories } = useCategories();

  async function handleDelete(id: string) {
    const originalArray = categories;
    const newArray = categories.filter((category) => category.id !== id);
    setCategories(newArray);

    try {
      await deleteCategory(id);
    } catch (error) {
      console.log("Failed to delete the category", error);
      toast.error(
        "Failed to delete the category, because it contains library items"
      );
      setCategories(originalArray);
    }
  }

  const columns: Column<Category>[] = [
    {
      key: "name",
      path: "name",
      label: "Name",
      content: (category) => (
        <div className="tooltip" data-tip="Update">
          <Link to={`/categories/${category.id}`} className="link-style">
            {category.name}
          </Link>
        </div>
      ),
    },

    {
      key: "delete",
      content: (category: Category) => (
        <div className="tooltip" data-tip="Delete">
          <button
            onClick={() => handleDelete(category.id)}
            className="btn btn-circle btn-error btn-sm text-[#ffffff]"
          >
            X
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-2/3 m-6 ">
          <Table
            columns={columns}
            items={categories}
            onSort={setSortColumn}
            sortColumn={sortColumn}
          />
          <Link
            to="/categories/new"
            className="btn btn-primary mt-4 text-[#ffffff]"
          >
            Add Category
          </Link>
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
