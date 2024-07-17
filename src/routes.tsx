import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LibraryItems from "./components/LibraryItems";
import LibraryItemFormPage from "./components/LibraryItemFormPage";
import CategoriesPage from "./components/CategoriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/books", element: <LibraryItems /> },
      { path: "/books/:id", element: <LibraryItemFormPage /> },
      { path: "/categories", element: <CategoriesPage /> },
    ],
  },
]);

export default router;
