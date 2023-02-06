import styled from "styled-components";

export const ListStyledContact = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    overflow-y: scroll ;
    

    .moldContactPic{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 52px;
        height: 52px;
        background-color: white;
        border-radius: 50%;
    }

    .contactPicture{
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }

    .contact{
        cursor: pointer;
        padding: 5px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style: none;
        width: 20%;
        height: 250px;
        background-color: white;
        border-radius: 25px;
    }
    .contact:hover{
        transition: 0.5s;
        background-color: #cccacb
;
    }
    .contactName{
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 15px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }

    .contactNumber{
        font-size: 15px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }

    
`

