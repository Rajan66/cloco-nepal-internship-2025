import { getBook } from "@/app/dashboard/book/book";
import { useQuery } from "@tanstack/react-query";

export const useGetBooks = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["books"],
        queryFn: getBook
    });
    return { data, isLoading };
};
