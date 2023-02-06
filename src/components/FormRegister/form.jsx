import { useForm } from "react-hook-form"
import api from "../../service/api"
import { useNavigate } from "react-router-dom";
import { FormRegisterStyle } from "./formRegisterStyle";
const FormRegister = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm()
    const navigate = useNavigate();
    async function connection(data){
        const result = await api.post("/users", data
        ).then((res)=>navigate("/")
        ).catch((err)=>console.log(err))
    }
    const onSubmit =async data => {
        const newData = {
            name:String(data.name),
            email:String(data.email),
            password:String(data.password),
            number:String(data.number)
        }
       await connection(newData)
    } 
    return(
        <> 
        
          <FormRegisterStyle onSubmit={handleSubmit(onSubmit)}>
             <label htmlFor="" className="labelRegister">Nome Completo</label>
             <input type="text" {...register("name")} className="inputForm" placeholder="Ex: Pedro Henrique Lima Sandes"/>

             <label htmlFor="" className="labelRegister">Email</label>
             <input type="email" {...register("email")} className="inputForm" placeholder="email@exemplo.com"/>

             <label htmlFor="" className="labelRegister">Senha</label>
             <input type="password" {...register("password")} className="inputForm" placeholder="******"/>

             <label htmlFor="" className="labelRegister">Telefone</label>
             <input type="text" {...register("number")} className="inputForm" placeholder="(75)99999-9999"/>
            
             <button type="submit" className="registerFormBtn">Enviar</button>
             
          </FormRegisterStyle>
        </>
    )
}

export default FormRegister