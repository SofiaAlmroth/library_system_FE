import { getLibraryItems } from "@services";
import { LibraryItem } from "@types";
import { useEffect, useState } from "react";

export function useLibrarytems() {
  const [libraryItems, setLibraryitems] = useState<LibraryItem[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: libraryItems } = await getLibraryItems();
      setLibraryitems(libraryItems);
    }

    fetch();
  }, []);

  return { libraryItems, setLibraryitems };
}
