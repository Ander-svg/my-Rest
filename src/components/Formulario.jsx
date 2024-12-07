import {useState} from "react";
import "./Formulario.css"
import logo from '../assets/Logo.png'

export function Formulario({setUser}){

    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (usuario === "" || password === ""){
            setError(true)
            return
        }

        setError(false)
        setUser([usuario])
    }

    return (
        <section>
            <div class="login">
            <form action="" id="loginForm"
                onSubmit={handleSubmit}>
                <div class="logo-login">
                    <img src={logo} alt="Logo" />
                </div>
                <div class="description">
                    <p>Bienvenido al sistema de inicio de sesión del Restaurante Christian. Por favor, ingresa tus credenciales para acceder.</p>
                </div>
                <div class="box-text">
                    <input
                    id="nombreUsuario" 
                    type="text"
                    placeholder="Username"
                    value={usuario}
                    onChange={e => setUsuario (e.target.value)} 
                    />
                    <i class='bx bxs-user' ></i>
                </div>
                <div class="box-text">
                    <input 
                    type="password"
                    value={password}
                    onChange={e => setPassword (e.target.value)}
                    name=""
                    placeholder="Password" 
                    id="contrasena" />
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <button type="submit" class="btn" onclick="">Iniciar Sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
            </div>
        </section>
    )
}