import React from 'react'
import useRolr from '../hook/useRole'
import useRole from '../hook/useRole'
import { Navigate } from 'react-router-dom';

export default function adminRoute({children}) {
    const [role, isLoading] = useRole();
    if (isLoading) return <p>Loading</p>;
    console.log(role);
    if (role === "admin") return children;
    if (role === "user") return <Navigate to="/dashboard/analytics" />;
}
