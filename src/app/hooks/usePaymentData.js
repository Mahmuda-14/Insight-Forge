import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePaymentData = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch: reload, data: payment = []}= useQuery({
        queryKey: ['payment'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/allPayment');
            return res.data
        }
    })

    return [payment, reload]
};

export default usePaymentData;