import styled from "styled-components";

export const HeaderStyle = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap');
background-color: #725BB4;
justify-content: center;
align-items: center;
display: flex;
height: 12vh;
gap: 70%;

.userPicture{
    width: 66px;
    height: 66px;
    border-radius: 50%;
    border: none;
}

.containerImage{
    width: 70px;
    height: 70px;
    border-radius: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
}
.userData{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

}

.data{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.userName{
    margin: 0px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: white;
}

.userNumber{
    margin: 0px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: white;
}

.out{
    cursor: pointer;
    height: 40%;
    width: 5%;
    background-color: white;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: black;
    border-radius: 25px;
}

.out:hover{
    transition: 0.5s;
    color: white;
    background-color: black;
}
`