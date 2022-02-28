import React from 'react';
import { useState } from 'react';
import "./Styles/logcad.css";
import FakerApi from "../services/Api";
import { useNavigate } from "react-router-dom";


function Login() {
  let navigate = useNavigate();
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
  
    async function Autenticar(e){
      e.preventDefault()
      let response = (await FakerApi.post('/login', { username , password }).catch((response) => response)) 
      if (response.success){
        navigate("/Welcome")
      }
     else {
       alert(response.message)
     }
    }

   /** function Autenticar(e){
      e.preventDefault()
      FakerApi
      .post('/login', { username , password })
      .then((response) => {
        let navigate = useNavigate();
        navigate("/")
      })
      .catch((response) => console.log ("falha",response))
    }*/

    return (
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form onSubmit={Autenticar} className="login-form">
              <span className="login-form-title"> Teste QuikDev </span>

              <div className="wrap-input">
                <input
                  className={username !== "" ? "has-val input" : "input"}
                  type="text"
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Usuário"></span>
              </div>
  
              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>
  
              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>
  
              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a className="txt2" href="cadastro">
                  Criar conta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;