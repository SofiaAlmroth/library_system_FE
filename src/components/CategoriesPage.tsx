import { useState } from "react";
import { Category, getCategories } from "../services/fakeCategoryService";
import { Column } from "./TableHeader";
import { SortColumn } from "./ItemsTable";
import Table from "./Table";
import { Link } from "react-router-dom";

const DEFAULT_SORTCOLUMN: SortColumn = { path: "category", order: "asc" };

function CategoriesPage() {
  const [categories, setCategories] = useState(getCategories());
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORTCOLUMN);

  function handleDelete(id: string) {
    const newArray = categories.filter((category) => category.id !== id);
    setCategories(newArray);
  }

  const columns: Column<Category>[] = [
    { path: "name", label: "Name" },
    {
      key: "delete",
      content: (item: Category) => (
        <div className="tooltip" data-tip="Delete">
          <button
            onClick={() => handleDelete(item.id)}
            className="btn btn-circle btn-error btn-sm"
          >
            X
          </button>
        </div>
      ),
    },
  ];
  console.log(columns);

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
          <Link to="/category/new" className="btn btn-primary mt-4">
            Add Library Item
          </Link>
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
