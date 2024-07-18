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

function ItemsTable({ libraryItems, sortColumn, onSort, onDelete }: Props) {
  const columns: Column<LibraryItems>[] = [
    {
      path: "title",
      label: "Title",
      content: (item) => (
        <div className="tooltip" data-tip="Update">
          <Link to={`/books/${item.id}`} className="link-style ">
            {item.title}
          </Link>
        </div>
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
          <>{`${item.nbrPages} pages`}</>
        ) : item.runTimeMinutes ? (
          <>{`${item.runTimeMinutes} mins`}</>
        ) : (
          <>-</>
        ),
    },
    {
      path: "borrowDetails",
      label: "Borrow Details",
      content: (item: LibraryItems) => {
        if (!item.borrower) {
          return <div>-</div>;
        } else {
          return (
            <>
              <div>{`${item.borrower}`}</div>
              <div>
                {item.borrowDate && item.borrowDate.toLocaleDateString()}
              </div>
            </>
          );
        }
      },
    },

    // {
    //   key: "actions",
    //   content: (item: LibraryItems) => {
    //     if (!item.isBorrowable) return <p>Not Borrowable</p>;
    //     if (item.borrower) {
    //       return (
    //         <div className="tooltip" data-tip="Return">
    //           <button
    //             onClick={() => checkInBook(item.id)}
    //             className="btn btn-secondary w-24 btn-sm"
    //           >
    //             Check In
    //           </button>
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <div className="tooltip" data-tip="Borrow">
    //           <button
    //             onClick={() => console.log(item)}
    //             className="btn btn-secondary w-24 btn-sm"
    //           >
    //             Check Out
    //           </button>
    //         </div>
    //       );
    //     }
    //   },
    // },

    {
      key: "delete",
      content: (item: LibraryItems) => (
        <div className="tooltip" data-tip="Delete">
          <button
            onClick={() => onDelete(item.id)}
            className="btn btn-circle btn-error btn-sm"
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
      items={libraryItems}
      onSort={onSort}
      sortColumn={sortColumn}
    />
  );
}

export default ItemsTable;
