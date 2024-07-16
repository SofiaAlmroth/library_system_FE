import { Category } from "./fakeCategoryService";

type BookType = "book" | "dvd" | "audiobook" | "encyclopedia";

interface LibraryItem {
  id: string;
  type: BookType;
  title: string;
  isBorrowable: boolean;
  category: Category;
  borrower?: string;
  borrowDate?: string;
  //   author?: string;
  //   nbrPages?: number;
  //   runTimeMinutes?: number;
}

interface Book extends LibraryItem {
  author: string;
  nbrPages: number;
}
interface DVD extends LibraryItem {
  runTimeMinutes: number;
}

interface Audiobook extends LibraryItem {
  runTimeMinutes: number;
}

interface Encyclopedia extends LibraryItem {
  author: string;
  nbrPages: number;
  isBorrowable: false;
}

export type LibraryItems = DVD | Book | Audiobook | Encyclopedia;

const exampleBook: Book = {
  id: "1",
  title: "Book",
  author: "Author Name",
  nbrPages: 300,
  isBorrowable: true,
  category: { id: "5b21ca3eeb7f6fbccd471818", name: "Science-Fiction" },
  type: "book",
  borrower: "Sofia",
  borrowDate: new Date().toLocaleString(),
};

const exampleDVD: DVD = {
  id: "2",
  title: "DVD",
  runTimeMinutes: 120,
  isBorrowable: true,
  category: { id: "5b21ca3eeb7f6fbccd471814", name: "Romance" },
  type: "dvd",
  borrower: "Björn",
  borrowDate: new Date().toLocaleString(),
};

const exampleAudiobook: Audiobook = {
  id: "3",
  title: "Audiobook",
  runTimeMinutes: 500,
  isBorrowable: true,
  category: { id: "5b21ca3eeb7f6fbccd471820", name: "Academic" },
  type: "audiobook",
};

const exampleEncyclopedia: Encyclopedia = {
  id: "4",
  title: "Encyclopedia",
  author: "Author Name",
  nbrPages: 1000,
  isBorrowable: false,
  category: { id: "5b21ca3eeb7f6fbccd471852", name: "Crime Novel" },
  type: "encyclopedia",
};

const libraryItems: LibraryItems[] = [
  exampleBook,
  exampleDVD,
  exampleAudiobook,
  exampleEncyclopedia,
];

export function getLibraryItems() {
  return libraryItems;
}

export function getLibraryItem(id: string) {
  return libraryItems.find((l) => l.id === id);
}

//   export function saveCategory(category: CategoryFormData) {
//     const categoryInDb =
//       categories.find((c) => c.id === category.id) || ({} as Category);

//     categoryInDb.name = category.name;

//     if (!categoryInDb.id) {
//       categoryInDb.id = Date.now().toString();
//       categories.push(categoryInDb);
//     }

//     return categoryInDb;
//   }

export function deleteLibraryItem(id: string) {
  const itemsInDb = libraryItems.find((l) => l.id === id);

  if (itemsInDb) libraryItems.splice(libraryItems.indexOf(itemsInDb), 1);

  return itemsInDb;
}

// const libraryItems: LibraryItem[] = [
//   {
//     id: "1",
//     type: "book",
//     title: "Example Book",
//     author: "Author Name",
//     nbrPages: 300,
//     isBorrowable: true,
//     categoryId: "1",
//   },

//   {
//     id: "2",
//     type: "dvd",
//     title: "Example DVD",
//     runTimeMinutes: 120,
//     isBorrowable: true,
//     categoryId: "2",
//   },

//   {
//     id: "3",
//     type: "audiobook",
//     title: "Example Audiobook",
//     runTimeMinutes: 500,
//     isBorrowable: true,
//     categoryId: "3",
//   },

//   {
//     id: "4",
//     type: "encyclopedia",
//     title: "Example Encyclopedia",
//     author: "Author Name",
//     nbrPages: 1000,
//     isBorrowable: false,
//     categoryId: "4",
//   },
// ];
