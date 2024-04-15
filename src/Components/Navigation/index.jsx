import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";

import { Nav, Lista, Icon } from "./styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
     const botaoClicado = useSelector((state) => state.example.botaoClicado);

     const rotas = [
          { name: "Home", to: "/", icon: <FaHome /> },

          { name: "Login", to: "/login", icon: <FaUserAlt /> },

          { name: "Registre-se", to: "/register"},
          { name: "Aluno", to: "/aluno"},
          { name: "Alunos", to: "/alunos"},
          { name: "Fotos", to: "/fotos"},


          { name: "Sair", to: "/Sair", icon: <FaSignInAlt /> },
     ];

     return (
          <Nav>
               <Lista>
                    {rotas.map((rota, index) => (
                         <li key={index}>
                              <Link to={rota.to}>
                                   {rota.name}
                                   <Icon>{rota.icon}</Icon>
                              </Link>
                         </li>
                    ))}
               </Lista>
               {botaoClicado ? "Botão clicado" : "Botão não clicado"}
          </Nav>
     );
};

export default Navigation;