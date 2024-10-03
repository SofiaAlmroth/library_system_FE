import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  CategoriesPage,
  CategoryFormPage,
  LibraryItemFormPage,
  LibraryItemsPage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
} from "@pages";
import { Logout } from "@components";
import HomePage from "@components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
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
