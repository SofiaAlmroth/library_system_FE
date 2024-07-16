import _ from "lodash";
import { LibraryItems } from "../services/fakeLibraryItem";
import { Column } from "./TableHeader";

interface Props {
  libraryItems: LibraryItems[];
  columns: Column[];
}

function TableBody({ libraryItems, columns }: Props) {
  return (
    <tbody>
      {libraryItems.map((item) => (
        <tr key={item.id}>
          {columns.map((column) =>
            "content" in column ? (
              <td key={column.key}>{column.content(item)}</td>
            ) : (
              <td key={column.path}>{_.get(item, column.path)}</td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
