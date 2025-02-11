import { getCustomer } from "@/app/dashboard/customer/customer";
import { useQuery } from "@tanstack/react-query";

export const useGetCustomers = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["customers"],
        queryFn: getCustomer
    });
    return { data, isLoading };
};
