// need to pass the generic type; I was forgetting the <T> after the type's name
export type TTableProps<T> = {
  heading: string[];
  data: T[]; // can be an array of any type/object
};
