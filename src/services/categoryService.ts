import axios from "axios";
import { Category } from "../types";
interface CategoryFormData {
  id?: string;
  name: string;
}

const API_BASEURL = "http://localhost:5588/api/categories/";

export function getCategories() {
  return axios.get<Category[]>(API_BASEURL);
}

export function getCategory(id: string) {
  return axios.get<Category>(API_BASEURL + id);
}

export function saveCategory(category: CategoryFormData) {
  if (category.id)
    return axios.put<Category>(API_BASEURL + category.id, category);
  return axios.post<Category>(API_BASEURL, category);
}

export function deleteCategory(id: string) {
  return axios.delete(API_BASEURL + id);
}
