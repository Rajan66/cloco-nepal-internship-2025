import { getBooks, getBook } from "@/features/book/actions/book";
import { useQuery } from "@tanstack/react-query";

export const useGetBooks = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["books"],
        queryFn: getBooks,
    });
    return { data, isLoading };
};

export const useGetBook = (id?: number) => {
    const { data, isLoading } = useQuery({
        queryKey: ["authors", id],
        queryFn: () => getBook(id),
    });
    return { data, isLoading };
};
