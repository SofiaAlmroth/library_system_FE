import { Link } from "react-router-dom";
import { Column, LibraryItem, SortColumn } from "@types";
import { Table } from "@components/common";

interface Props {
  libraryItems: LibraryItem[];
  sortColumn: SortColumn;
  onSort(sortColumn: SortColumn): void;
  onDelete(id: string): void;
}

function getAbrivietedTitle(item: LibraryItem) {
  const abrivietedTitle = item.title
    .split(" ")
    .map((titlePart) => titlePart[0])
    .join("")
    .toUpperCase();
  return abrivietedTitle;
}
function ItemsTable({ libraryItems, sortColumn, onSort, onDelete }: Props) {
  const columns: Column<LibraryItem>[] = [
    {
      key: "title",
      path: "title",
      label: "Title",
      content: (item) => (
        <div className="tooltip" data-tip="Update">
          <Link to={`/books/${item.id}`} className="link-style ">
            {`${item.title} (${getAbrivietedTitle(item)})`}
          </Link>
        </div>
      ),
    },
    { path: "category.name", label: "Category" },
    { path: "type", label: "Type" },
    {
      key: "author",
      path: "author",
      label: "Author",
      content: (item) =>
        item.author ? <span>{item.author}</span> : <span>-</span>,
    },
    {
      key: "nbrPages",
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
      key: "borrowDetails",
      path: "borrowDetails",
      label: "Borrow Details",
      content: (item: LibraryItem) => {
        if (!item.borrower) {
          return <div>-</div>;
        } else {
          return (
            <>
              <div>{`${item.borrower}`}</div>
              <div>
                {item.borrowDate
                  ? new Date(item.borrowDate).toLocaleDateString()
                  : null}
              </div>
            </>
          );
        }
      },
    },

    {
      key: "delete",
      content: (item: LibraryItem) => (
        <div className="tooltip" data-tip="Delete">
          <button
            onClick={() => onDelete(item.id)}
            className="btn btn-circle btn-error btn-sm text-[#ffffff]"
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
