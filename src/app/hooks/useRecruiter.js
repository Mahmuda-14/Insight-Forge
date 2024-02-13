import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useRecruiter = () => {
   
    const axiosSecure = useAxiosSecure()
        const {user, loading}= useAuth();
        const { isPending:isRecruiterLoading, data: isRecruiter = []}= useQuery({
            queryKey: ['recruiter'],
            enabled:!loading,
            queryFn: async()=>{
                const res = await axiosSecure.get(`/users/recruiter/${user.email}`);
                return res.data.recruiter
            }
        })
    
        return [isRecruiter, isRecruiterLoading]
    
};

export default useRecruiter;