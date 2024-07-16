import { SortColumn } from "./ItemsTable";

interface Props {
  sortColumn: SortColumn;
  onSort(sortColumn: SortColumn): void;
}

function TableHeader({ onSort, sortColumn }: Props) {
  function handleSort(path: string) {
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort({ ...sortColumn });
  }
  return (
    <thead>
      <tr>
        <th onClick={() => handleSort("title")}>Book Title (BT) </th>
        <th onClick={() => handleSort("type")}>Type</th>
        <th onClick={() => handleSort("category")}>Category</th>
        <th>IsBorrowable</th>
        <th>Borrower</th>
        <th>Borrowed Date</th>
        <th></th>
      </tr>
    </thead>
  );
}

export default TableHeader;
