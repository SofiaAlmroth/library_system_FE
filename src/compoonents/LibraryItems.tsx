import { useState } from "react";
import _ from "lodash";
import { getLibraryItems } from "../services/fakeLibraryItem";
import ItemsTable from "./ItemsTable";

interface SortColumn {
  path: string;
  order: "asc" | "desc";
}
const DEFAULT_SORTCOLUMN: SortColumn = { path: "name", order: "asc" };

function LibraryItems() {
  const [libraryItems, setLibraryitems] = useState(getLibraryItems());
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORTCOLUMN);

  function handleDelete(id: string) {
    const newArray = libraryItems.filter((item) => item.id !== id);
    setLibraryitems(newArray);
  }

  function handleSort(path: string) {
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    setSortColumn({ ...sortColumn });
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
      <h1 className="text-4xl font-bold m-6">LibraryItems</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <ItemsTable
            onSort={handleSort}
            onDelete={handleDelete}
            libraryItems={sortedItems}
          />
          <button className="btn btn-primary m-6">Add Library Item</button>
        </div>
      </div>
    </>
  );
}

export default LibraryItems;
