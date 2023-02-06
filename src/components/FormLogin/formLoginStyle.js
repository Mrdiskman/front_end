import styled from "styled-components";

export const FormLoginStyle = styled.form`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');
 
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color:#F3E3E3;
        width: 20vw;
        height: 40vh;
        border-radius: 20px;
        margin-top:20vh;

.inputFormLogin{
        border: none;
        padding-left: 10px;
        width: 75%;
        height: 10%;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        border-radius: 20px;
        margin-bottom: 20px;
        background-color: #C7BDD7;
        color: #0E1E21;
}
.btnSendForm{
    cursor: pointer;
        width: 45%;
        height: 10%;
        border-radius: 25px;
        background-color: #C7BDD7;
        border: none;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #0E1E21;
    }
.btnSendForm:hover{
        transition: 1s;
        color: white;
        background-color: black;
}
.linkToRegister{
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #4D69CC;
        text-decoration: underline;
        cursor: pointer;
}
.message{
        font-family: 'Inter', sans-serif;
        margin-top: 30px;
}
.greetigns{
        font-family: 'Inter', sans-serif; 
        font-weight: 500;
        margin-bottom: 5px;
}
.warnign{
        font-family: 'Inter', sans-serif; 
        font-weight: 500;
        margin-top: 0;
        margin-bottom: 20px;
}
`