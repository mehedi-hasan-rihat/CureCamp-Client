import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_URL,
  });
export default function useAxiosPublic() {
  return instance
}
