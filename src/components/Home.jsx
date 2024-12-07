export function Home ({setUser}){

    const handleLogout = () =>{
        setUser([])
    }

    return(
        <div>
            <p>INDEX</p>
            <button onClick = {handleLogout}> Cerrar sesion </button>
        </div>
    )
}