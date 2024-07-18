import { Category, getCategories } from "./fakeCategoryService";

export interface LibraryItems {
  id: string;
  type: ItemsType;
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
  type: ItemsType;
  title: string;
  categoryId: string;
  isBorrowable: boolean;
  borrower?: string;
  borrowDate?: Date;
  author?: string;
  nbrPages?: number;
  runTimeMinutes?: number;
}

export enum ItemsType {
  DVD = "dvd",
  Book = "book",
  Audiobook = "audiobook",
  Encyclopedia = "encyclopedia",
}

export const itemTypes: ItemsType[] = Object.values(ItemsType);

export function getLibraryItems() {
  return libraryItems;
}

export function getLibraryItem(id: string) {
  return libraryItems.find((l) => l.id === id);
}
export function saveLibraryItem(libraryItem: LibraryFormData) {
  const categoryInDb = getCategories().find(
    (category) => category.id === libraryItem.categoryId
  );

  if (!categoryInDb) throw new Error(`Category was not found`);

  const libraryItemInDb =
    libraryItems.find((l) => l.id === libraryItem.id) || ({} as LibraryItems);

  libraryItemInDb.title = libraryItem.title;
  libraryItemInDb.type = libraryItem.type;
  libraryItemInDb.category = categoryInDb;
  libraryItemInDb.author = libraryItem.author;
  libraryItemInDb.nbrPages = libraryItem.nbrPages;
  libraryItemInDb.runTimeMinutes = libraryItem.runTimeMinutes;
  libraryItemInDb.borrowDate = libraryItem.borrowDate;
  libraryItemInDb.borrower = libraryItem.borrower;
  libraryItemInDb.isBorrowable = libraryItem.isBorrowable;

  if (!libraryItemInDb.id) {
    libraryItemInDb.id = Date.now().toString();
    libraryItems.push(libraryItemInDb);
  }

  return libraryItemInDb;
}

export function deleteLibraryItem(id: string) {
  const itemsInDb = libraryItems.find((l) => l.id === id);

  if (itemsInDb) libraryItems.splice(libraryItems.indexOf(itemsInDb), 1);

  return itemsInDb;
}

const libraryItems: LibraryItems[] = [
  {
    id: "1",
    type: ItemsType.Book,
    title: "Example Book",
    author: "Author Name",
    nbrPages: 300,
    isBorrowable: true,
    category: { id: "5b21ca3eeb7f6fbccd471820", name: "Academic" },
    borrower: "Sofia Almroth",
    borrowDate: new Date(),
  },

  {
    id: "2",
    type: ItemsType.DVD,
    title: "Example DVD",
    runTimeMinutes: 120,
    isBorrowable: true,
    category: { id: "5b21ca3eeb7f6fbccd471852", name: "Crime Novel" },
    borrower: "Björn Hultqvist",
    borrowDate: new Date(),
  },

  {
    id: "3",
    type: ItemsType.Audiobook,
    title: "Example Audiobook",
    runTimeMinutes: 500,
    isBorrowable: true,
    category: { id: "5b21ca3eeb7f6fbccd471814", name: "Romance" },
  },

  {
    id: "4",
    type: ItemsType.Encyclopedia,
    title: "Example Encyclopedia",
    author: "Author Name",
    nbrPages: 1000,
    isBorrowable: false,
    category: { id: "5b21ca3eeb7f6fbccd471818", name: "Science-Fiction" },
  },
];

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
