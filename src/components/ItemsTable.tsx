import { Link } from "react-router-dom";
import { LibraryItems } from "../services/fakeLibraryItem";
import Table from "./Table";
import { Column } from "./TableHeader";

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
  const columns: Column[] = [
    { path: "category.name", label: "Category" },
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

    { path: "borrower", label: "Borrower Name" },
    // {
    //   key: "borrowDate",
    //   path: "borrowDate",
    //   label: "Borrowed Date",
    //   //content: (item) => <>{new Date(item.borrowDate).toLocaleDateString()}</>,
    // },
    {
      key: "borrower",
      content: (item: LibraryItems) => (
        <div
          className={`badge ${item.borrower ? "badge-error" : "badge-success"}`}
        >
          {!item.borrower ? "Borrow" : "Borrowed"}
        </div>
      ),
    },
    {
      key: "delete",
      content: (item: LibraryItems) => (
        <div className="tooltip" data-tip="Delete">
          <button onClick={() => onDelete(item.id)} className="btn btn-circle">
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
