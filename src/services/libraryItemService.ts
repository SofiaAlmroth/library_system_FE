import { Category } from "./categoryService";
import axios from "axios";

export type BookType = "DVD" | "NOVEL" | "AUDIOBOOK" | "ENCYCLOPEDIA";
export interface LibraryItem {
  id: string;
  title: string;
  type: BookType;
  category: Category;
  isBorrowable?: boolean;
  borrower?: string;
  borrowDate?: Date;
  author?: string;
  nbrPages?: number;
  runTimeMinutes?: number;
}

export interface LibraryFormData {
  id?: string;
  type: BookType;
  title: string;
  categoryId: string;
  isBorrowable?: boolean;
  borrower?: string;
  borrowDate?: Date;
  author?: string;
  nbrPages?: number;
  runTimeMinutes?: number;
}

const API_BASEURL = "http://localhost:5588/api/libraryItems/";

export function getLibraryItems() {
  return axios.get<LibraryItem[]>(API_BASEURL);
}

export function getLibraryItem(id: string) {
  return axios.get<LibraryItem>(API_BASEURL + id);
}
export function saveLibraryItem(libraryItem: LibraryFormData) {
  if (libraryItem.id)
    return axios.put<LibraryItem>(API_BASEURL + libraryItem.id, libraryItem);

  return axios.post<LibraryItem>(API_BASEURL, libraryItem);
}

export function deleteLibraryItem(id: string) {
  return axios.delete(API_BASEURL + id);
}
