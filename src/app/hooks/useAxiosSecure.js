'use client'
import axios from "axios";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

const axiosSecure = axios.create({
    baseURL: 'https://insight-forge-server.vercel.app'
    // baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const {logOut} = useAuth
    const router = useRouter();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use((response) => {
        return response
    }, async(error) => {
        const status = error.response.status
        if (status === 401 || status === 403) {
            await logOut()
            router.push("/login");
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;