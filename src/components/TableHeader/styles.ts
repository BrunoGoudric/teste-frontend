import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 150px;
    width: 100%;
    margin-top: 50px;

    .boxCompany{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 25px;

        .filterButton{
            width: 163px;
            height: 48px;
            border-radius: 12px;
            border: none;
            transition: 0.2ms;
        }

        .filterButton:hover{
            background: #429BA1;
            color: #fff;
            font-weight: bold;
        }

        .btnReset{
            width: 78px;
            height: 35px;
            border-radius: 12px;
            border: none;
            background: #DBF6F8;
            font-weight: bold;
        }

        .btnReset:hover{

        }

        
    }

    
`;