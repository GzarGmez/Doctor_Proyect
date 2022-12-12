import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import '/src/assets/stylesheets/views-styles/NotFound.css'

function NotFound() {

    const [route, setRoute] = useState("")

    useEffect(()=>{
        setRoute(window.location.pathname)
    },[])

    return (
        <div className="not-founded">
            <h1>Oops! al parecer no pudimos encontrar lo que buscabas.</h1>
            <h2>La ruta <code>{route}</code>&nbsp; no existe</h2>
            <Link className="link-back" to="/">Volver al inicio</Link>
        </div>
     );
}

export default NotFound;