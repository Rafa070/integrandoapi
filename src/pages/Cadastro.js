import React from 'react';
import { useState } from 'react';
import "./Styles/logcad.css";
import FakerApi from "../services/Api";
import { useNavigate } from "react-router-dom";


function Cadastro() {
  let navigate = useNavigate();
    const [name, setUser] = useState("");
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    async function Register(e){
      e.preventDefault()
      let response = (await FakerApi.post('/register', { name, username, password }).catch((response) => response))
      if (response.success){
        navigate("/login")
      }
      else {
        alert(response.massage)
      }
    }
  
    return (
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form onSubmit={Register} className="login-form">
              <span className="login-form-title"> Cadastro </span>

              <div className="wrap-input">
                <input
                  className={name !== "" ? "has-val input" : "input"}
                  type="text"
                  value={name}
                  onChange={(e) => setUser(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome Completo"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={username !== "" ? "has-val input" : "input"}
                  type="text"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome de Usuário"></span>
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
                <button className="login-form-btn">Cadastrar</button>
              </div>
  
              <div className="text-center">
                <span className="txt1">Possui conta? </span>
                <a className="txt2" href="login">
                  Logar
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cadastro;