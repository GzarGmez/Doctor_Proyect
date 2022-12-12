import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "./UserContext";

function PrivateRoute() {
    const {userctx, setUserctx} = useContext(UserContext)

    return (userctx.role === "admin" ? <Outlet /> : <Navigate to="/" />);
}

export default PrivateRoute;