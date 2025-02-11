import { Customer } from "@/types/index";

export const getCustomers = async (): Promise<Customer[]> => {
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

export const getCustomer = async (id?: number) => {
    try {
        const response = await fetch(`http://localhost:5000/customers/${id}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch customer: ${id}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
export const deleteCustomer = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:5000/customers/${id}`, {
            method: "DELETE",
        });
        console.log(response);

        if (!response.ok) {
            throw new Error(`Failed to delete customer: ${id}`);
        }

        return response;
    } catch (error) {
        console.log(error);
    }
};
