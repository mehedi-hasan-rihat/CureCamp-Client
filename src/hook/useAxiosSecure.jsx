import axios from "axios";
// import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_URL,
    
})
const useAxiosSecure = () => {
    // const navigate = useNavigate();
    const { logOut } = useAuth();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        console.log(token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            // await logOut();
            // navigate('/auth/signin');
            console.log(status);
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;