import "../assets/stylesheets/components-styles/Header.css"
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai'
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { BiExit } from 'react-icons/bi'
import Swal from "sweetalert2";


function Header() {

    const { userctx, setUserctx } = useContext(UserContext)

    function logout() {
        console.log("a")
        setUserctx({ logged: false, role: null })
        Swal.fire({
            icon: 'success',
            title: 'Sesión finalizada',
            text: 'Ha cerrado sesión'
        })

    }

    function noLoggedLinks() {
        return (
            <>
                <NavLink to="/" className="link">Inicio</NavLink>
                <NavLink to="/services" className="link">Servicios</NavLink>
                <NavLink to="/contact" className="link">Contáctanos</NavLink>
                <NavLink to="/login" className="link"><AiOutlineUser /></NavLink>
            </>
        )
    }

    function loggedLinks(role) {
        if (role === "admin") {
            return (
                <>
                    <NavLink to="/" className="link">Inicio</NavLink>
                    <NavLink to="/contact" className="link">Contáctanos</NavLink>
                    <NavLink to="/dashboard" className="link">Dashboard</NavLink>
                    <NavLink onClick={() => {
                        logout()
                    }} className="link"><BiExit /></NavLink>
                </>
            )
        }

        return (
            <>
                <NavLink to="/" className="link">Inicio</NavLink>
                <NavLink to="/services" className="link">Servicios</NavLink>
                <NavLink to="/contact" className="link">Contáctanos</NavLink>
                <NavLink onClick={() => {
                    logout()
                }} className="link"><BiExit /></NavLink>
            </>
        )
    }

    return (
        <nav>
            <img className="logo-type" src="src/assets/Images/Caduceus.svg" alt="Caduceus" />
            <div className="nav-links">
                {
                    userctx.logged ? loggedLinks(userctx.role) : noLoggedLinks()
                }
            </div>
        </nav>
    );
}

export default Header;