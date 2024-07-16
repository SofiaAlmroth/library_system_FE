import { LibraryItems } from "../services/fakeLibraryItem";
import { SortColumn } from "./ItemsTable";
import TableBody from "./TableBody";
import TableHeader, { Column } from "./TableHeader";

interface Props {
  sortColumn: SortColumn;
  columns: Column[];
  libraryItems: LibraryItems[];
  onSort(sortColumn: SortColumn): void;
}

function Table({ columns, sortColumn, libraryItems, onSort }: Props) {
  return (
    <table className="table w-full">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} libraryItems={libraryItems} />
    </table>
  );
}

export default Table;
