import '../assets/stylesheets/components-styles/LoginForm.css'
import img from '../assets/Images/login-img.png'
import { useState } from 'react';
import { validateUser } from '../pseudoserver/Server';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../context/UserContext';
import { useContext } from 'react';


function LoginForm() {

    const {userctx, setUserctx} = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    function access(e) {
        e.preventDefault()
        const response = validateUser(email, password)

        if (response.auth) {
            Swal.fire({
                icon: 'success',
                title: 'Autenticado',
                text: 'Inicio de Sesión Exitoso'
            })
            setUserctx({logged:true, role:response.data.role})
            navigate("/")
            return
        }

        Swal.fire({
            icon: 'error',
            title: 'Credenciales inválidas',
            text: 'Intente de nuevo'
        })

    }

    return (
        <div className="login">
            <img src={img} alt="operation" className="login-img" />
            <form className="login-form" onSubmit={(e) => {
                access(e)
            }}>
                <h1 className="login-title">Inicio de Sesión</h1>

                <label htmlFor="email">Correo Electrónico</label>
                <input onKeyUp={(e) => { setEmail(e.target.value) }} className='login-inp' type="email" name="email" id="email" />

                <label htmlFor="pwd">Contraseña</label>
                <input onKeyUp={(e) => { setPassword(e.target.value) }} className='login-inp' type="password" name="pwd" id="pwd" />

                <button type="submit" className='login-btn'>Entrar</button>

            </form>
        </div>
    );
}

export default LoginForm;