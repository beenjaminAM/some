import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    useEffect(() => {
      console.log('%%%autrh')
      console.log(auth)
    }, [])
    

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <>
                <Outlet />
            </> 
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;