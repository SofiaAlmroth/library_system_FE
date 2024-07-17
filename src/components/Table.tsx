import { SortColumn } from "./ItemsTable";
import TableBody, { Id } from "./TableBody";
import TableHeader, { Column } from "./TableHeader";

interface Props<T extends Id> {
  sortColumn: SortColumn;
  columns: Column<T>[];
  items: T[];
  onSort(sortColumn: SortColumn): void;
}

function Table<T extends Id>({ columns, sortColumn, items, onSort }: Props<T>) {
  return (
    <table className="table w-full">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} items={items} />
    </table>
  );
}

export default Table;
