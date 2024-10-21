import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <div>


            <div className={`text-white font-rubik text-[1.070rem] rounded-route py-4 items-center mr-[2rem]`}>
            <Link to={'/'}>
            <h2 className="text-white uppercase text-2xl font-anurati">
              Pro<span className="text-secondary">route</span>
            </h2>
            </Link>


                <ul className='flex flex-col gap-[1rem] mt-[2rem]'>
                    <li> <Link to={"/"}>Dashboard</Link> </li>
                    <li><Link to={"/adminusers"}>Usuarios</Link></li>
                    <li><Link to={"/"}>Publicaciones</Link></li>    
                    <li><Link to={"/"}>Cursos</Link></li>
                    <li><Link to={"/"}>Comunidades</Link></li>
                    <li><Link to={"/"}>Configuracion</Link></li>

                </ul>
            </div>

        </div>
    )
}

export default AdminSidebar