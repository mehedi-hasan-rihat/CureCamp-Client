import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

export default function useSaveUsers() {
    const axiosSecure = useAxiosSecure();
console.log(4);
    const saveUsers = async (user) => {
        const userData = {
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
        };
        try {
            // const { data } = await axios.post(`${import.meta.env.VITE_URL}/users`, userData);
            const { data } = await axiosSecure.post(`/users`, userData);
            console.log('User saved:', data);
            return data;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    };

    return saveUsers;
}
