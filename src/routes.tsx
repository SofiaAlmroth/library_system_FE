import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LibraryItems from "./components/LibraryItems";
import Categories from "./components/Categories";
import LibraryItemFormPage from "./components/LibraryItemFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/books", element: <LibraryItems /> },
      { path: "/books/:id", element: <LibraryItemFormPage /> },
      { path: "/categories", element: <Categories /> },
    ],
  },
]);

export default router;
