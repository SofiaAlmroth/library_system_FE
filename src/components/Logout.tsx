import { auth } from "@services";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    auth.logout();
    navigate("/books");
  }, []);
  return <></>;
}

export default Logout;
