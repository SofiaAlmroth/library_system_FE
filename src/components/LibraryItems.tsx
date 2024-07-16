import { useState } from "react";
import _ from "lodash";
import { getLibraryItems } from "../services/fakeLibraryItem";
import ItemsTable, { SortColumn } from "./ItemsTable";
import { useNavigate } from "react-router-dom";

const DEFAULT_SORTCOLUMN: SortColumn = { path: "category", order: "asc" };

function LibraryItems() {
  const [libraryItems, setLibraryitems] = useState(getLibraryItems());
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORTCOLUMN);
  const navigate = useNavigate();

  function handleDelete(id: string) {
    const newArray = libraryItems.filter((item) => item.id !== id);
    setLibraryitems(newArray);
  }

  if (libraryItems.length === 0)
    return <p className="m-6">There are no books in the database</p>;

  const sortedItems = _.orderBy(
    libraryItems,
    sortColumn.path,
    sortColumn.order
  );

  return (
    <>
      <div className="flex flex-col">
        <div className="m-6">
          <ItemsTable
            onSort={setSortColumn}
            sortColumn={sortColumn}
            onDelete={handleDelete}
            libraryItems={sortedItems}
          />
          <button
            onClick={() => navigate("/books/new")}
            className="btn btn-primary"
          >
            Add Library Item
          </button>
        </div>
      </div>
    </>
  );
}

export default LibraryItems;
