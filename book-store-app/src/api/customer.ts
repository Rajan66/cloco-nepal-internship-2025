import { Customer } from "@/types/index";

export const getData = async (): Promise<Customer[]> => {
  try {
    const response = await fetch("http://localhost:5000/customers");
    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
