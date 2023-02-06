import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import { HeaderStyle } from "./headerStyle";

const Header =  () =>{
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    async function connection(){
        const token = JSON.parse(localStorage.getItem("@TOKEN"||""))
        const result = await api.get("/users/me", {headers:{Authorization:`Bearer ${token}`}}
        ).then((res)=>{
            setUserData(res.data)
        }
        ).catch((err)=>console.log(err))
    }
   useEffect(()=>{connection()},[])
   
    return(
        <HeaderStyle>
            <section className="userData">
                <div className="containerImage">
                    <img className="userPicture" src="data:image/png;base64,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" alt="Foto de um usuario" />
                </div> 
                    <div className="data">
                        <h2 className="userName">{userData.name}</h2>
                        <p className="userNumber">{userData.number}</p>
                    </div>
            </section>
           
            <button onClick={()=>navigate("/")} className="out">Sair</button>
        </HeaderStyle>
    )
}

export default Header