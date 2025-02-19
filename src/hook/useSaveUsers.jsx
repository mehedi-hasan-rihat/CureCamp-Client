import axios from "axios";

export default function useSaveUsers() {
    const saveUsers = async (user) => {
        const userData = {
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
        };
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_URL}/users`, userData);
            console.log('User saved:', data);
            return data;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    };

    return saveUsers;
}
