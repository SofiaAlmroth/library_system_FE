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
    <table className="table w-full">
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
      <tbody>
        {libraryItems.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>{item.categoryId}</td>
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
