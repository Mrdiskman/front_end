import styled from "styled-components";

export const FormRegisterStyle = styled.form`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');
 
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color:#F3E3E3;
        width: 20vw;
        height: 50vh;
        border-radius: 20px;

    .labelRegister{
        color: #0E1E21;
        width: 15vw;
        display: flex;
        justify-content: start;
        margin-bottom: 5px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 14px;
    }
    .inputForm{
        border: none;
        padding-left: 10px;
        width: 75%;
        height: 7%;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        border-radius: 20px;
        margin-bottom: 20px;
        background-color: #C7BDD7;
        color: #0E1E21;
    }

    .registerFormBtn{
        cursor: pointer;
        width: 50%;
        height: 8%;
        border-radius: 25px;
        background-color: #C7BDD7;
        border: none;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color: #0E1E21;
    }

    .registerFormBtn:hover{
        transition: 1s;
        color: white;
        background-color: black;
    }
    .navigate{
        border: none;
        background-color: transparent;
        color: #0E1E21;
    }

`