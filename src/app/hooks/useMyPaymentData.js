
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMyPaymentData = () => {
    const {user, loading} = useAuth()
    const axiosPublic = useAxiosPublic()
    const { refetch: reload, data: myPayment = []}= useQuery({
        queryKey: ['myPayment'],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosPublic.get(`/singlePayment/${user.email}`);
            return res?.data
        }
    })

    return [myPayment, reload]
};


export default useMyPaymentData;