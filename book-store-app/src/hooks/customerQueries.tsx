import { getCustomer, getCustomers } from "@/app/dashboard/customer/customer";
import { useQuery } from "@tanstack/react-query";

export const useGetCustomers = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["customers"],
        queryFn: getCustomers,
    });
    return { data, isLoading };
};

export const useGetCustomer = (id?: number) => {
    const { data, isLoading } = useQuery({
        queryKey: ["customers", id],
        queryFn: () => getCustomer(id),
    });
    return { data, isLoading };
};
