import { LibraryItems } from "../services/fakeLibraryItem";

interface Props {
  libraryItems: LibraryItems[];
  onSort(path: string): void;
  onDelete(id: string): void;
}

function ItemsTable({ libraryItems, onSort, onDelete }: Props) {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Book Title (BT) </th>
          <th onClick={() => onSort("type")}>Type</th>
          <th onClick={() => onSort("category")}>Category</th>
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
