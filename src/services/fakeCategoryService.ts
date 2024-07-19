import axios from "axios";

export interface Category {
  id: string;
  name: string;
}

interface CategoryFormData {
  id?: string;
  name: string;
}

// const categories: Category[] = [
//   { id: "5b21ca3eeb7f6fbccd471818", name: "Science-Fiction" },
//   { id: "5b21ca3eeb7f6fbccd471814", name: "Romance" },
//   { id: "5b21ca3eeb7f6fbccd471820", name: "Academic" },
//   { id: "5b21ca3eeb7f6fbccd471852", name: "Crime Novel" },
// ];

export function getCategories() {
  return axios.get<Category[]>("http://localhost:5588/api/categories");
}

export function getCategory(id: string) {
  return axios.get<Category>("http://localhost:5588/api/categories/" + id);
}

export function saveCategory(category: CategoryFormData) {
  if (category.id)
    return axios.put<Category>(
      "http://localhost:5588/api/categories/" + category.id,
      category
    );
  return axios.post<Category>("http://localhost:5588/api/categories", category);
}

export function deleteCategory(id: string) {
  return axios.delete("http://localhost:5588/api/categories/" + id);
}
