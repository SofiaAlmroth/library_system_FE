import { useState } from "react";
import _ from "lodash";
import { getLibraryItems } from "../services/fakeLibraryItem";
import ItemsTable, { SortColumn } from "./ItemsTable";

const DEFAULT_SORTCOLUMN: SortColumn = { path: "title", order: "asc" };

function LibraryItems() {
  const [libraryItems, setLibraryitems] = useState(getLibraryItems());
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORTCOLUMN);

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
      <h1 className="text-4xl font-bold m-6">LibraryItems</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <ItemsTable
            onSort={setSortColumn}
            sortColumn={sortColumn}
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
