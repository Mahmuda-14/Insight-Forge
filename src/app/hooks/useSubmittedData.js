
import useAxiosPublic from './useAxiosPublic';

import { useQuery } from '@tanstack/react-query';

const useSubmittedData = () => {
   
    const axiosPublic = useAxiosPublic()
    const { refetch: reload, data: allSubmittedData = []}= useQuery({
        queryKey: ['allSubmittedData'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/allSubmission`);
            return res.data
        }
    })

    return [allSubmittedData, reload]
};


export default useSubmittedData;