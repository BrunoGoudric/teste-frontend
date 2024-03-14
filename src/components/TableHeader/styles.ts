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

        
    }

    .boxSearch{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 25px;

        > input{
            width: 433px;
            height: 53px;
            border-radius: 12px;
            border: none;
            padding: 0 20px;
        }

        > button {
            width: 140px;
            height: 53px;
            border-radius: 12px;
            border: none;

            color: #fff;
            font-size: 18px;
            background: #023D68;
            font-weight: bold;
            transition: 0.2ms;

        }

        > button:hover{
            background: #09568E;
        }
    }
`;