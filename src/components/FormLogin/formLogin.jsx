import { useForm } from "react-hook-form"
import api from "../../service/api"
import { useNavigate } from "react-router-dom";
import { FormLoginStyle } from "./formLoginStyle";
const FormLogin = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm()
    const navigate = useNavigate();
    async function connection(data){
        const result = await api.post("/users/login", data
        ).then((res)=>{
            const {token} = res.data
            localStorage.setItem("@TOKEN", JSON.stringify(token))
            navigate("/isLoged")
        }
        ).catch((err)=>console.log(err))
    }
    const onSubmit = async data => {
        const loginData = {
            email:String(data.email),
            password:String(data.password),
        }
       await connection(loginData)
    } 
    return(
        <>
          <FormLoginStyle    onSubmit={handleSubmit(onSubmit)}>
             <p className="greetigns">Olá, seja bem vindo a contacts!</p>
             <p className="warnign">Faça Login para começar</p>
             <label htmlFor="">Email</label>
             <input type="email" {...register("email")} className="inputFormLogin" placeholder="Email@exemplo.com"/>

             <label htmlFor="">Senha</label>
             <input type="text" {...register("password")} className="inputFormLogin" placeholder="******"/>

             <button type="submit" className="btnSendForm">Entrar</button>
             <p className="message">Ainda não possui uma conta? <a onClick={()=>navigate("/register")} className="linkToRegister">Cadastre-se</a></p>
          </FormLoginStyle>
        </>
    )
}

export default FormLogin