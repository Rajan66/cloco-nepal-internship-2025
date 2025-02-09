import { Book } from "@/types/index";

export const getData = async (): Promise<Book[]> => {
  try {
    const response = await fetch("http://localhost:5000/books");
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
