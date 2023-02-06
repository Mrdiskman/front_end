import { useNavigate } from "react-router-dom";
import FormRegister from "../../components/FormRegister/form"
import { FormRegisterPageStyle } from "./registerPageStyle"
const Register = () =>{
  const navigate = useNavigate();
    return(
        <FormRegisterPageStyle>
          <header className="formHeader">
           <button className="navigator" onClick={()=>navigate("/")}>Voltar</button>
          </header>
          <FormRegister/>
        </FormRegisterPageStyle>
    )
}

export default Register