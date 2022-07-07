import React from "react";

// #1
// Declare an interface, that will take a generic type
// Make the items as an array of generic type
// and make the renderItem that accept item as the generic T type
interface TableProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// #2
// Assign the generic T type to the component param
// Make the props as generics based on its data being passed in
// The <T,> is just a syntax so that it understand that this is Type, and not a JSX component
export const Table = <T,>(props: TableProps<T>) => {
  return null;
};

export const Component = () => {
  return (
    <Table
      items={[{ id: 1 }]}
      renderItem={(item) => {
        return item.id;
      }}
    >
    </Table>
  );
};