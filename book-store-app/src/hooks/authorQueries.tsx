import { getAuthors, getAuthor } from "@/features/author/actions/author";
import { useQuery } from "@tanstack/react-query";

export const useGetAuthors = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["authors"],
        queryFn: getAuthors,
    });
    return { data, isLoading };
};

export const useGetAuthor = (id?: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["author", id],
        queryFn: () => getAuthor(id),
    });
    return { data, isLoading };
};
