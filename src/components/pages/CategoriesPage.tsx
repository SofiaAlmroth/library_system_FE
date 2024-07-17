import { useState } from "react";
import { Category, getCategories } from "../../services/fakeCategoryService";
import { Column } from "../TableHeader";
import { SortColumn } from "../ItemsTable";
import Table from "../Table";
import { Link, useNavigate } from "react-router-dom";
import { getLibraryItems } from "../../services/fakeLibraryItem";

const DEFAULT_SORTCOLUMN: SortColumn = { path: "category", order: "asc" };

function CategoriesPage() {
  const [categories, setCategories] = useState(getCategories());
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORTCOLUMN);
  const [libraryItems, setLibraryItems] = useState(getLibraryItems());
  const navigate = useNavigate();

  function handleDelete(id: string) {
    // const categoryInUse = libraryItems.some((item) => item.category.id === id);
    // if (categoryInUse) return console.log("cannot delete category");

    const newArray = categories.filter((category) => category.id !== id);
    setCategories(newArray);
  }

  const columns: Column<Category>[] = [
    {
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

    // {
    //   key: "edit",
    //   content: (category: Category) => (
    //     <div className="tooltip" data-tip="Edit">
    //       <button
    //         onClick={() => navigate(`/categories/${category.id}`)}
    //         className="btn  btn-primary btn-sm"
    //       >
    //         Edit
    //       </button>
    //     </div>
    //   ),
    // },
    {
      key: "delete",
      content: (category: Category) => (
        <div className="tooltip" data-tip="Delete">
          <button
            onClick={() => handleDelete(category.id)}
            className="btn btn-circle btn-error btn-sm"
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
          <Link to="/categories/new" className="btn btn-primary mt-4">
            Add Library Item
          </Link>
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
