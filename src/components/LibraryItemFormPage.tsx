import { useNavigate, useParams } from "react-router-dom";

function LibraryItemFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Book Form {id}</h1>
      <button onClick={() => navigate("/books")} className="btn btn-primary">
        Save
      </button>
    </>
  );
}

export default LibraryItemFormPage;
