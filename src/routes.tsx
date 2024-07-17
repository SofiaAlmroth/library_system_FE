import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LibraryItemsPage from "./components/pages/LibraryItemsPage";
import LibraryItemFormPage from "./components/pages/LibraryItemFormPage";
import CategoriesPage from "./components/pages/CategoriesPage";
import CategoryFormPage from "./components/pages/CategoryFormPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/books", element: <LibraryItemsPage /> },
      { path: "/books/:id", element: <LibraryItemFormPage /> },
      { path: "/categories", element: <CategoriesPage /> },
      { path: "/categories/:id", element: <CategoryFormPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

export default router;
