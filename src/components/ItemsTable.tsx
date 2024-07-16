import { Link } from "react-router-dom";
import Table from "./Table";
import { Column } from "./TableHeader";
import { LibraryItems } from "../services/fakeLibraryItem";

export interface SortColumn {
  path: string;
  order: "asc" | "desc";
}
interface Props {
  libraryItems: LibraryItems[];
  sortColumn: SortColumn;
  onSort(sortColumn: SortColumn): void;
  onDelete(id: string): void;
}

function checkInBook(id: string) {
  console.log("Checking in book with ID:", id);
}

function ItemsTable({ libraryItems, sortColumn, onSort, onDelete }: Props) {
  const columns: Column[] = [
    {
      path: "title",
      label: "Title",
      content: (item) => (
        <Link to={`/books/${item.id}`} className="link-style">
          {item.title}
        </Link>
      ),
    },
    { path: "type", label: "Type" },
    { path: "category.name", label: "Category" },
    {
      path: "author",
      label: "Author",
      content: (item) =>
        item.author ? <span>{item.author}</span> : <span>-</span>,
    },
    {
      path: "nbrPages",
      label: "Pages/Runtime",
      content: (item) =>
        item.nbrPages ? (
          <span>{`${item.nbrPages} pages`}</span>
        ) : item.runTimeMinutes ? (
          <span>{`${item.runTimeMinutes} mins`}</span>
        ) : (
          <span>-</span>
        ),
    },
    {
      path: "borrowDetails",
      label: "Borrow Details",
      content: (item: LibraryItems) => {
        if (!item.borrower) {
          return <div className="badge badge-success">Not Borrowed</div>;
        } else {
          return (
            <>
              <div>{item.borrower}</div>
              <div>
                {item.borrowDate && item.borrowDate.toLocaleDateString()}
              </div>
            </>
          );
        }
      },
    },

    {
      key: "actions",
      content: (item: LibraryItems) => {
        if (item.borrower) {
          return (
            <button
              onClick={() => checkInBook(item.id)}
              className="btn btn-secondary w-24 btn-sm"
            >
              Check In
            </button>
          );
        } else {
          return (
            <button
              onClick={() => console.log(item)}
              className="btn btn-secondary w-24 btn-sm"
            >
              Check Out
            </button>
          );
        }
      },
    },

    {
      key: "delete",
      content: (item: LibraryItems) => (
        <div className="tooltip" data-tip="Delete">
          <button
            onClick={() => onDelete(item.id)}
            className="btn btn-circle btn-error"
          >
            X
          </button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      libraryItems={libraryItems}
      onSort={onSort}
      sortColumn={sortColumn}
    />
  );
}

export default ItemsTable;
