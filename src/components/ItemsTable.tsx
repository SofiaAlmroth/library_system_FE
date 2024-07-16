import { LibraryItems } from "../services/fakeLibraryItem";
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
      <tbody>
        {libraryItems.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>{item.category.name}</td>
            <td>
              {item.isBorrowable
                ? "Available for borrowing"
                : "Not available for borrowing"}
            </td>
            <td>{item.borrower}</td>
            <td>{item.borrowDate}</td>
            <td>
              <div className="tooltip" data-tip="Delete">
                <button
                  onClick={() => onDelete(item.id)}
                  className="btn btn-circle"
                >
                  X
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemsTable;
