import React from "react";
import FakerApi from "../services/Api";
import { useNavigate } from "react-router-dom";

function Welcome(){
    let navigate = useNavigate();

    async function Logout(e){
        e.preventDefault()
        let response = (await FakerApi.post('/logout', {}).catch((response) => response)) 
    console.log(response);
    if (response.success){
        navigate("/login")
      }
    }

    /*async function Seach(e){
        e.preventDefault()
        let response = (await FakerApi.get('/posts/view', { post_id: 1 }).catch((response) => response))
        console.log(response)
    }*/

    return(
            <form onSubmit={Logout}>
            <h1>Bem Vindo!!</h1>
                 <div className="container-logout-form-btn">
        <button className="logout-form-btn">Logout</button>

      </div>
      <input type="text" name="search" placeholder="Pesquisar comentário"></input>
              <input  type="submit" value="Pesquisar"></input>
</form>

    
    )
}
export default Welcome;