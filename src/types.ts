export interface TextColumn {
  path: string;
  label: string;
}
export interface ContentColumn<T> {
  key: string;
  content(item: T): JSX.Element;
}
export type Column<T> = TextColumn | ContentColumn<T>;

export interface Id {
  id: string;
}

export interface SortColumn {
  path: string;
  order: "asc" | "desc";
}

export interface Category {
  id: string;
  name: string;
}

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

export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
