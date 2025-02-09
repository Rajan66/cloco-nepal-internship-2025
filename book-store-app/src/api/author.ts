import { Author } from "@/types/index";

export const getData = async (): Promise<Author[]> => {
  try {
    const response = await fetch("http://localhost:5000/authors");
    if (!response.ok) {
      throw new Error("Failed to fetch authors");
    }

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
