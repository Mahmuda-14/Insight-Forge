import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useBlogs = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch: reloadBlog, data: blogs = []}= useQuery({
        queryKey: ['blogs'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/allBlog');
            return res.data
        }
    })

    return [blogs, reloadBlog]
};

export default useBlogs;
