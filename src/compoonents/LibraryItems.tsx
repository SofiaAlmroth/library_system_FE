import { useState } from "react";
import _ from "lodash";
import { getLibraryItems } from "../services/fakeLibraryItem";

function LibraryItems() {
  const [libraryItems, setLibraryitems] = useState(getLibraryItems());
  const [sortColumn, setSortColumn] = useState("title");

  function handleDelete(id: string) {
    const newArray = libraryItems.filter((item) => item.id !== id);
    setLibraryitems(newArray);
  }

  if (libraryItems.length === 0)
    return <p className="m-6">There are no books in the database</p>;

  const sortedItems = _.orderBy(libraryItems, sortColumn, "asc");
  console.log(sortColumn);

  return (
    <>
      <h1 className="text-4xl font-bold m-6">LibraryItems</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th onClick={() => setSortColumn("title")}>Book Title (BT) </th>
                <th onClick={() => setSortColumn("type")}>Type</th>
                <th onClick={() => setSortColumn("category")}>Category</th>
                <th>IsBorrowable</th>
                <th>Borrower</th>
                <th>Borrowed Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item) => (
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
                        onClick={() => handleDelete(item.id)}
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
          <button className="btn btn-primary m-6">Add Library Item</button>
        </div>
      </div>
    </>
  );
}

export default LibraryItems;
