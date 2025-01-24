import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxioxSecure";

export default function useRole() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: role,
    isLoading,
  } = useQuery({
    queryKey: ["role", user?.email],
    enabled : !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/${user?.email}`);
      console.log(data.role);
      return data.role;
    },
  });
  return [role, isLoading];
}
