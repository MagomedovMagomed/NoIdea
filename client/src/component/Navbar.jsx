import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.png"
//Этот блок предназначен для рендеринга навигационной панели или верхнего колонтитула
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Logo}></img>
                </div>
                <div className="links">
                    <span className="write">
                        <Link className="link" to="/write">Добавить пост</Link>
                    </span>
                    <Link className="link" to="/?cat=home">
                        <h6>Главная</h6>
                    </Link>
                    <Link className="link" to="">
                        <h6>Профиль</h6>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar