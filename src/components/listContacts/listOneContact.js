import styled from "styled-components";

export const OneContact = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .closeContact{
        cursor: pointer;
        margin-left: 90%;
        margin-top: 10px;
        border: none;
        background-color: transparent;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 25px;
    }

    .closeContact:hover{
        transition: 0.5s;
        color: red;
    }

    .contactPicture{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .contactName{
        font-size: 50px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }

    .contactNumber{
        font-size: 20px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }
    .contactEmail{
        font-size: 20px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }
    .actionButton{
        cursor: pointer;
        background-color: #725BB4;
        border: none;
        border-radius: 25px;
        width: 150px;
        height: 40px;
        font-size: 15px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        color:  white;
    }
    .delete:hover{
        transition: 0.5s;
        background-color: red
    }

    .update:hover{
        transition: 0.5s;
        background-color: yellow;
        color: black;
    }
    .containerBtns{
        margin-top: 50px;
        display: flex;
        gap: 10px;
    }
`