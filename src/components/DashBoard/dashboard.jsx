import { useState } from "react"
import api from "../../service/api"
import { useForm } from "react-hook-form"
import { FormContactStyle } from "./dashboardStyle"
import ListContacts from "../listContacts/listContacts"

const DashBoard =  () =>{ 
    const [modalCreate, setModalCreate] = useState(false)
    const {register, handleSubmit, formState:{errors}} = useForm()

    async function connection(data){
        const token = JSON.parse(localStorage.getItem("@TOKEN"||""))
        const result = await api.post("/contacts", data, {headers:{Authorization:`Bearer ${token}`}}
        ).then((res)=>{
            setModalCreate(false)
            console.log((res))
        }
        ).catch((err)=>console.log(err))
    }

    const onSubmit = async data => {
        const newData = {
            name:String(data.name),
            email:String(data.email),
            number:String(data.number)
        }
        await connection(newData)
    } 
   
    return(
    <>
      {
            modalCreate === false?
        (   
            <FormContactStyle>
                <div className="containerAddBtn">
                    <button onClick={()=>setModalCreate(true)} className="addContact">Novo Contato</button>
                </div>
                <section className="containerContacts">
                    <ListContacts/>
                </section>
            </FormContactStyle>
        ) 
        :
        (
            <FormContactStyle>
                <section className="containerFormContact">
                    <form onSubmit={handleSubmit(onSubmit)} className="formContact">
                        <div className="containerCloseButton">
                            <button className="closeForm" onClick={()=> setModalCreate(false)}>x</button>
                        </div>
                        <label htmlFor="" className="inputContactLabel">Nome</label>
                        <input type="text" {...register("name")} placeholder="Ex: Júlio Cesar" className="inputContact"/>

                        <label htmlFor="" className="inputContactLabel">Email</label>
                        <input type="text" {...register("email")} placeholder="julio@exemplo.com" className="inputContact"/>

                        <label htmlFor="" className="inputContactLabel">Telefone</label>
                        <input type="text" {...register("number")} placeholder="(44)9 9999-1111" className="inputContact"/>

                        <button type="submit" className="btnSendContact">Criar novo contato</button>
                    </form>
                </section>
            </FormContactStyle>
            )
       } 
    </>
)}

export default DashBoard