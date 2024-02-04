import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useUsersData = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch: reload, data: users = []}= useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/allUsers');
            return res.data
        }
    })

    return [users, reload]
};

export default useUsersData;