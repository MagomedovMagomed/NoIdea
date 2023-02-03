import React from "react";
import { Link } from "react-router-dom";
//Эта страница предназначена для входа в веб приложение
const Login = () => {
    return(
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username"/>
                <input required type="password" placeholder="password"/>
                <button>Login</button>
                {/* <p>This is Error</p> */}
                <span>У вас нет аккаунта? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login;