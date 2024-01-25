import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useDiscussData = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch: reload, data: discuss = []}= useQuery({
        queryKey: ['discuss'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/allDiscus');
            return res.data
        }
    })

    return [discuss, reload]
};

export default useDiscussData;