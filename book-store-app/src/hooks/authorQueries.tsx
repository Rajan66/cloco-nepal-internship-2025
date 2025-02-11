import { getAuthors, getAuthor } from "@/app/dashboard/author/author";
import { useQuery } from "@tanstack/react-query";

export const useGetAuthors = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["authors"],
        queryFn: getAuthors,
    });
    return { data, isLoading };
};

export const useGetAuthor = (id?: number) => {
    const { data, isLoading } = useQuery({
        queryKey: ["authors", id],
        queryFn: () => getAuthor(id),
    });
    return { data, isLoading };
};
