import { getAuthor } from "@/app/dashboard/author/author";
import { useQuery } from "@tanstack/react-query";

export const useGetAuthor = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["authors"],
        queryFn: getAuthor
    });
    return { data, isLoading };
};
