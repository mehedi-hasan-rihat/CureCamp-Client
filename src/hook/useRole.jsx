import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

export default function useRole() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: role,
    isLoading,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled : !!user,
    queryFn: async () => {
      const { data } = await axiosPublic(`/users/${user?.email}`);
      console.log(data.role);
      return data.role;
    },
  });
  return [role, isLoading];
}
