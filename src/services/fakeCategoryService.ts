interface Category {
  id: string;
  name: string;
}

interface CategoryFormData {
  id?: string;
  name: string;
}

const categories: Category[] = [
  { id: "5b21ca3eeb7f6fbccd471818", name: "Science-Fiction" },
  { id: "5b21ca3eeb7f6fbccd471814", name: "Romance" },
  { id: "5b21ca3eeb7f6fbccd471820", name: "Academic" },
  { id: "5b21ca3eeb7f6fbccd471852", name: "Crime Novel" },
];

export function getCategories() {
  return categories;
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export function saveCategory(category: CategoryFormData) {
  const categoryInDb =
    categories.find((c) => c.id === category.id) || ({} as Category);

  categoryInDb.name = category.name;

  if (!categoryInDb.id) {
    categoryInDb.id = Date.now().toString();
    categories.push(categoryInDb);
  }

  return categoryInDb;
}

export function deleteCategory(id: string) {
  const categoryInDb = categories.find((c) => c.id === id);

  if (categoryInDb) categories.splice(categories.indexOf(categoryInDb), 1);

  return categoryInDb;
}
