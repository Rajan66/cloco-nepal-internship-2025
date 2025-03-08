import { getUser, getUsers } from '@/features/user/actions/user';
import { useQueries, useQuery } from '@tanstack/react-query';

export const useGetUsers = () => {
    const { data, isLoading, error } = useQuery({
        queryFn: getUsers,
        queryKey: ['users'],
    });
    return { data, isLoading, error };
};

export const useGetUser = (id: string) => {
    const { data, isLoading, error } = useQuery({
        queryFn: () => getUser(id),
        queryKey: ['users', id],
    });
    return { data, isLoading, error };
};
