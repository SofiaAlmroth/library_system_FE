import { LibraryItems } from "../services/fakeLibraryItem";
import TableBody from "./TableBody";
import TableHeader, { Column } from "./TableHeader";

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
    { path: "category", label: "Category" },
    { path: "isBorrowable", label: "Is Borrowable" },
    { path: "borrower", label: "Borrower" },
    { path: "borrowedDate", label: "Borrowed Date" },
    { key: "delete" },
  ];

  return (
    <table className="table w-full">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody onDelete={onDelete} libraryItems={libraryItems} />
    </table>
  );
}

export default ItemsTable;
