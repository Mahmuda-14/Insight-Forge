import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useHackathonData = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch: reload, data: allhackathon = []}= useQuery({
        queryKey: ['allhackathon'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/allHackathon');
            return res.data
        }
    })

    return [allhackathon, reload]
};

export default useHackathonData;