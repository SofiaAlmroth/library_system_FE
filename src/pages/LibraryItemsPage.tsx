import { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LibraryItem, SortColumn } from "@types";
import { deleteLibraryItem, getLibraryItems } from "@services";
import { ItemsTable } from "@components";

const DEFAULT_SORTCOLUMN: SortColumn = { path: "category.name", order: "asc" };

function LibraryItemsPage() {
  const [libraryItems, setLibraryitems] = useState<LibraryItem[]>([]);
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORTCOLUMN);

  useEffect(() => {
    async function fetch() {
      const { data: libraryItems } = await getLibraryItems();
      setLibraryitems(libraryItems);
    }

    fetch();
  }, []);

  async function handleDelete(id: string) {
    const originalArray = libraryItems;

    const newArray = libraryItems.filter((item) => item.id !== id);
    setLibraryitems(newArray);

    try {
      await deleteLibraryItem(id);
    } catch (error) {
      console.log("Failed to delete the library item", error);
      toast.error("Failed to delete the library item");
      setLibraryitems(originalArray);
    }
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
      <div className="flex flex-col ">
        <div className="m-6 mt-12">
          <ItemsTable
            onSort={setSortColumn}
            sortColumn={sortColumn}
            onDelete={handleDelete}
            libraryItems={sortedItems}
          />
          <Link to="/books/new" className="btn btn-primary mt-4">
            Add Library Item
          </Link>
        </div>
      </div>
    </>
  );
}

export default LibraryItemsPage;
