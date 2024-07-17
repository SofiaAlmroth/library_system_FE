import { useParams } from "react-router-dom";
import { getCategories } from "../../services/fakeCategoryService";
import { useState } from "react";

function LibraryItemFormPage() {
  const { id } = useParams();
  const [categories, setCategories] = useState(getCategories());

  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-3">Library Item Form {id}</h1>
        <form className="w-2/3">
          <div className="mb-3 form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input type="title" className="input input-bordered" />
          </div>

          <label className="mb-3 form-control ">
            <div className="label">
              <span className="label-text">Type</span>
            </div>
            <select className="select select-bordered">
              <option />

              <option>Book</option>
              <option>DVD</option>
              <option>Audiobook</option>
              <option>Encyclopedia</option>
            </select>
          </label>

          <label className="mb-3 form-control ">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select className="select select-bordered">
              <option />

              {categories.map((category) => (
                <option>{category.name}</option>
              ))}
            </select>
          </label>

          <div className="mb-3 form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input type="name" className="input input-bordered" />
          </div>

          <div className="mb-3 form-control">
            <label className="label">
              <span className="label-text">Pages/Runtime</span>
            </label>
            <input type="name" className="input input-bordered" />
          </div>

          <div className="mb-3 form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Borrowable</span>
              <input type="checkbox" className="checkbox" />
            </label>
          </div>

          <div>
            <button type="button" className="btn btn-primary btn-sm mt-3">
              Check Out
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm  mt-3 ml-2"
            >
              Check In
            </button>
          </div>

          <button className="btn btn-primary mt-3">Save</button>
        </form>
      </div>
    </>
  );
}

export default LibraryItemFormPage;
