import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const api = axios.create({
    baseURL: 'https://localhost:8800/api/',
    //ignor ssl
    // httpsAgent: new https.Agent({  
    //     rejectUnauthorized: false
    //   })
  });

  
//Эта страница предназначена для регистрации в веб приложении
const Register = () => {
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })

    const handlersChanged = e =>{
        setInputs(prev =>({...prev,[e.target.value]: e.target.value}))
    }
    const handlerSubmit = async e =>{
        e.preventDefault()
        
        try{
            const res = await api.post("/auth/register", inputs)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="auth">
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder="username" name="username" onChange={handlersChanged}/>
                <input required type="text" placeholder="email" name="email" onChange={handlersChanged}/>
                <input required type="password" placeholder="password" name="password" onChange={handlersChanged}/>
                <button onClick={handlerSubmit}>Register</button>
                <p>This is Error</p>
                <span><Link to="/login">Вернуться на страницу входа в систему</Link>
                </span>
            </form>
        </div>
    )
}

export default Register;