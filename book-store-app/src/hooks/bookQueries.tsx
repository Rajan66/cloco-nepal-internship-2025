import { getBook } from "@/api/book";
import { useQuery } from "@tanstack/react-query";
export const useGetBooks = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["books"],
        queryFn: getBook
    });
    return { data, isLoading };
};
