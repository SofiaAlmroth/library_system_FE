import { Category } from "./fakeCategoryService";
import axios from "axios";

export type BookType = "dvd" | "book" | "audiobook" | "encyclopedia";
export interface LibraryItem {
  id: string;
  type: BookType;
  title: string;
  category: Category;
  isBorrowable: boolean;
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
  isBorrowable: boolean;
  borrower?: string;
  borrowDate?: Date;
  author?: string;
  nbrPages?: number;
  runTimeMinutes?: number;
}

// const libraryItems: LibraryItems[] = [
//   {
//     id: "1",
//     type: "book",
//     title: "Example Book",
//     author: "Author Name",
//     nbrPages: 300,
//     isBorrowable: true,
//     category: { id: "5b21ca3eeb7f6fbccd471820", name: "Academic" },
//     borrower: "Sofia Almroth",
//     borrowDate: new Date(),
//   },

//   {
//     id: "2",
//     type: "dvd",
//     title: "Example DVD",
//     runTimeMinutes: 120,
//     isBorrowable: true,
//     category: { id: "5b21ca3eeb7f6fbccd471852", name: "Crime Novel" },
//     borrower: "Björn Hultqvist",
//     borrowDate: new Date(),
//   },

//   {
//     id: "3",
//     type: "audiobook",
//     title: "Example Audiobook",
//     runTimeMinutes: 500,
//     isBorrowable: true,
//     category: { id: "5b21ca3eeb7f6fbccd471814", name: "Romance" },
//   },

//   {
//     id: "4",
//     type: "encyclopedia",
//     title: "Example Encyclopedia",
//     author: "Author Name",
//     nbrPages: 1000,
//     isBorrowable: false,
//     category: { id: "5b21ca3eeb7f6fbccd471818", name: "Science-Fiction" },
//   },
// ];

export function getLibraryItems() {
  return axios.get<LibraryItem[]>("http://localhost:5588/api/libraryItems");
}

export function getLibraryItem(id: string) {
  return axios.get<LibraryItem>("http://localhost:5588/api/libraryItems/" + id);
}
export function saveLibraryItem(libraryItem: LibraryFormData) {
  if (libraryItem.id)
    return axios.put<LibraryItem>(
      "http://localhost:5588/api/libraryItems/" + libraryItem.id,
      libraryItem
    );

  return axios.post<LibraryItem>(
    "http://localhost:5588/api/libraryItems/",
    libraryItem
  );
}

export function deleteLibraryItem(id: string) {
  return axios.delete("http://localhost:5588/api/libraryItems/" + id);
}

// interface Book extends LibraryItem {
//   author: string;
//   nbrPages: number;
// }
// interface DVD extends LibraryItem {
//   runTimeMinutes: number;
// }

// interface Audiobook extends LibraryItem {
//   runTimeMinutes: number;
// }

// interface Encyclopedia extends LibraryItem {
//   author: string;
//   nbrPages: number;
//   isBorrowable: false;
// }

// const exampleBook: Book = {
//   id: "1",
//   title: "Book",
//   author: "Author Name",
//   nbrPages: 300,
//   isBorrowable: true,
//   category: { id: "5b21ca3eeb7f6fbccd471818", name: "Science-Fiction" },
//   type: "book",
//   borrower: "Sofia",
//   borrowDate: new Date(),
// };

// const exampleDVD: DVD = {
//   id: "2",
//   title: "DVD",
//   runTimeMinutes: 120,
//   isBorrowable: true,
//   category: { id: "5b21ca3eeb7f6fbccd471814", name: "Romance" },
//   type: "dvd",
//   borrower: "Björn",
//   borrowDate: new Date(),
// };

// const exampleAudiobook: Audiobook = {
//   id: "3",
//   title: "Audiobook",
//   runTimeMinutes: 500,
//   isBorrowable: true,
//   category: { id: "5b21ca3eeb7f6fbccd471820", name: "Academic" },
//   type: "audiobook",
// };

// const exampleEncyclopedia: Encyclopedia = {
//   id: "4",
//   title: "Encyclopedia",
//   author: "Author Name",
//   nbrPages: 1000,
//   isBorrowable: false,
//   category: { id: "5b21ca3eeb7f6fbccd471852", name: "Crime Novel" },
//   type: "encyclopedia",
// };

// const libraryItems: LibraryItems[] = [
//   exampleBook,
//   exampleDVD,
//   exampleAudiobook,
//   exampleEncyclopedia,
// ];
