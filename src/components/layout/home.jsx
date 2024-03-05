import React, { Fragment, useEffect, useState } from "react";
import ClienteAxios from "../../config/axios";
import { Link } from "react-router-dom";
import Sidebar from "../layout/sidebarNav";
import { Card } from "@material-tailwind/react";
import "./../../index.css";

const TABLE_HEAD = ["Nombre", "Apellido", "Email", "Rol", "Acciones" ];

function Home() {

  const [librarians, saveLibrarians] = useState([]);
  const [roles, saveRoles] = useState([]);


  const ConsultarAPI = async () => {
    try {
      const librariansResponse = await ClienteAxios.get("/Bibliotecarios");
      const rolesResponse = await ClienteAxios.get("/roles");


      saveLibrarians(librariansResponse.data);
      saveRoles(rolesResponse.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    ConsultarAPI();
  }, []);

  const getRolNameById = (rol_id) => {
    const rol = roles.find((c) => c.id === rol_id);
    return rol ? rol.name : "N/A"; 
  };

  return (
    <Fragment>
    <Sidebar />
    
    <Card className="w-2/3 overflow-scroll m-auto">
    <h1 className="text-3xl font-semibold text-left py-5 mb-5">Panel de Administración</h1>


      <table className="w-2/3 min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blueGray-400 bg-blueGray-50 p-4 font-normal leading-none opacity-70"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        {librarians.map(({ name, lastname, email, rol_id }, index) => (

        


            <tr key={name} className="even:bg-blueGray-50/50 font-normal">
              <td className="p-4">{name}</td>
              <td className="p-4">{lastname}</td>
              <td className="p-4">{email}</td>
              <td className="p-4" >{getRolNameById(rol_id)}</td>
              <td className="p-4" >
                <Link to={"#"} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Editar</Link>
             
                <Link to={"#"} className="m-10 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </Card>
  </Fragment>
    
  );
}

export default Home;
