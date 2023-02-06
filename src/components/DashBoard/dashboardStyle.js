import styled from "styled-components";

export const FormContactStyle = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');
 display: flex;
 flex-direction: column;
 align-items: center;
 height: 88vh;
 background-color:#f0d1e1;

.containerFormContact{
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}
.formContact{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:white;
    border-radius: 25px;
    width: 35%;
    height: 40vh;
}
.inputContactLabel{
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 10px;
}
.inputContact{
    width: 60%;
    height: 40px;
    border-radius: 25px;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    padding-left: 10px;
    font-size: 15px ;
    background-color: #C7BDD7;
    color: #0E1E21;
}
.btnSendContact{
    cursor: pointer;
    height: 50px;
    margin-top: 20px;
    width: 40%;
    background-color: black;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: white;
    border-radius: 25px;
}
.btnSendContact:hover{
    transition: 1s;
    background-color: #62c431;
    color: black;
}
.closeForm{
    cursor: pointer;
    margin-bottom: 10px;
    background-color: transparent;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    border: none;
    font-size: 20px;
    color: black;
}
.closeForm:hover{
    transition: 0.4s;
    color: red;
}
.containerCloseButton{
    width: 100%;
    padding-top: 5px;
    padding-right: 30px;
    display: flex;
    justify-content: end;
}

.containerContacts{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    background-color: #ad84a9;
    border-radius: 25px;
    width: 70vw;
    height: 70vh;
}

.addContact{
    cursor: pointer;
    margin-top: 4.5vh;
    height: 40px;
    width: 150px;
    border-radius: 25px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: white;
    background-color: #725BB4;
    border: none;
}
.addContact:hover{
    background-color: black;    
    transition: 0.5s;
}

.containerAddBtn{
    display: flex;
    justify-content: end;
    width: 70vw;
}
`