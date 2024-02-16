import { useQuery } from "@tanstack/react-query";
import useSingleUser from "./useSingleUser";
import useAxiosSecure from "./useAxiosSecure";


const useSingleConversation = () => {
    const axiosSecure = useAxiosSecure()
    const [singleUser] = useSingleUser()

     console.log(singleUser[0]?._id)

    const { refetch, data: singleConversation = []}= useQuery({
        queryKey: ['singleConversation'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/conversation/${singleUser[0]?._id}`);
            console.log(res.data)
            return res.data
        }
    })

    return [singleConversation, refetch]
};

export default useSingleConversation;