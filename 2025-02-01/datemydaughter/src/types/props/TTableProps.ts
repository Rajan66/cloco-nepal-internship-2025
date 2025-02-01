// need to pass the generic type; I was forgetting the <T> after the type's name
export type TTableProps<T> = {
  heading: string[];
  datas: T[]; // can be an array of any type/object
  isLoading: boolean;
  editUrl?: string;
  onDelete?: (index: number) => void;
};
