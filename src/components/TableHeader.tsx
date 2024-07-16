import { LibraryItems } from "../services/fakeLibraryItem";
import { SortColumn } from "./ItemsTable";

interface Props {
  sortColumn: SortColumn;
  columns: Column[];
  onSort(sortColumn: SortColumn): void;
}

interface TextColumn {
  path: string;
  label: string;
}
interface ContentColumn {
  key: string;
  content(item: LibraryItems): JSX.Element;
}
export type Column = TextColumn | ContentColumn;

function TableHeader({ onSort, sortColumn, columns }: Props) {
  function handleSort(path: string) {
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort({ ...sortColumn });
  }

  function renderSortIcon(column: TextColumn) {
    if (column.path !== sortColumn.path) return null;

    if (sortColumn.order === "asc")
      return <i className="fa-solid fa-sort-down" />;

    return <i className="fa-solid fa-sort-up" />;
  }

  return (
    <thead>
      <tr>
        {columns.map((column) =>
          "path" in column ? (
            <th key={column.path} onClick={() => handleSort(column.path)}>
              {column.label}
              {renderSortIcon(column)}
            </th>
          ) : (
            <th key={column.key} />
          )
        )}
      </tr>
    </thead>
  );
}

export default TableHeader;
