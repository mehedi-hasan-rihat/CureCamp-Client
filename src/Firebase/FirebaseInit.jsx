import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKe,
  authDomain:import.meta.env.VITE_authDomai,
  projectId:import.meta.env.VITE_projectI,
  storageBucket:import.meta.env.VITE_storageBucke,
  messagingSenderId:import.meta.env.VITE_messagingSenderI,
  appId:import.meta.env.VITE_appI,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;