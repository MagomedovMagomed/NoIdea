import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../Image/Logo.png"
import {AuthContext} from "../context/authContext"
//Этот блок предназначен для рендеринга навигационной панели или верхнего колонтитула
const Navbar = () => {
    const {currentUser, logout } = useContext(AuthContext);

    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/"><img src={Logo}></img></Link>
                    
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
                    <span>{currentUser?.username}</span>
                    {currentUser? <span onClick={logout}>Выход</span> :<Link className="link" to="/login">Вход</Link>}
                </div>
            </div>
        </div>
    )
}

export default Navbar