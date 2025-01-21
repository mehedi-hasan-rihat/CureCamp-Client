import useAxiosSecure from "./useAxiosSecure";

export default function useSaveUsers() {
    const axiosSecure = useAxiosSecure();

    const saveUsers = async (user) => {
        const userData = {
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
        };

        console.log(userData);

        try {
            const { data } = await axiosSecure.post('/users', userData);
            console.log('User saved:', data);
            return data;
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    };

    return saveUsers;
}
