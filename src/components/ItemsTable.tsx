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
    { path: "title", label: "Title" },
    { path: "type", label: "Type" },
    { path: "category.name", label: "Category" },

    { path: "borrower", label: "Borrower" },
    // {
    //   key: "borrowDate",
    //   path: "borrowDate",
    //   label: "Borrowed Date",
    //   //content: (item) => <>{new Date(item.borrowDate).toLocaleDateString()}</>,
    // },
    {
      key: "isBorrowable",
      content: (item: LibraryItems) => (
        <div
          className={`badge ${
            item.isBorrowable ? "badge-success" : "badge-error"
          }`}
        >
          {item.isBorrowable ? "Borrowable" : "Not Borrowable"}
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
