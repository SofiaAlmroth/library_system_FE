import { LibraryItems } from "../services/fakeLibraryItem";

interface Props {
  libraryItems: LibraryItems[];
  onDelete(id: string): void;
}

function TableBody({ libraryItems, onDelete }: Props) {
  return (
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
  );
}

export default TableBody;
