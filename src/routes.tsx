import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LibraryItemsPage from "./components/pages/LibraryItemsPage";
import LibraryItemFormPage from "./components/pages/LibraryItemFormPage";
import CategoriesPage from "./components/pages/CategoriesPage";
import CategoryFormPage from "./components/pages/CategoryFormPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import Logout from "./components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/books", element: <LibraryItemsPage /> },
      { path: "/books/:id", element: <LibraryItemFormPage /> },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/categories/:id", element: <CategoryFormPage /> },
    ],
  },
  { path: "/logout", element: <Logout /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

export default router;
