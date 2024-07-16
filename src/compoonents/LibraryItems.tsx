import { useState } from "react";
import { getLibraryItems } from "../services/fakeLibraryItem";

function LibraryItems() {
  const [libraryItems, setLibraryitems] = useState(getLibraryItems());

  function handleDelete(id: string) {
    const newArray = libraryItems.filter((item) => item.id !== id);
    setLibraryitems(newArray);
  }

  return (
    <>
      <h1 className="text-4xl font-bold m-6">LibraryItems</h1>
      <div className="overflow-x-auto container">
        <table className="table">
          <thead>
            <tr>
              <th>Book Title (BT)</th>
              <th>Type</th>
              <th>Category</th>
              <th>IsBorrowable</th>
              <th>Borrower</th>
              <th>Borrowed Date</th>
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
                    ? "Avalable for borrowing"
                    : "Not avalable for borrowing"}
                </td>
                <td>{item.borrower}</td>
                <td>{item.borrowDate}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-circle"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary m-6">Add LibraryItem</button>
      </div>
    </>
  );
}

export default LibraryItems;
