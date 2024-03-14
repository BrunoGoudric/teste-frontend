import styled from "styled-components";

export const Container = styled.div`
    margin-top: 48px;
    > table{
        width: 1950px;

        > thead{
            background: #4f3ea4;
            height: 48px;
            padding-bottom: 15px;
        }

        > tbody{
            margin-top: 15px;
            color: #000;
            background: #fff;
            width: 100%;
            height: 48px;
            text-align: center;

           > tr {
            > td:nth-child(1) {
                border-bottom-left-radius: 12px;
            }

            >td:nth-child(11){
                border-bottom-right-radius: 12px;

                .btnEdit{
                    width: 90px;
                    height: 36px;
                    border-radius: 12px;
                    border: none;
                }

                .btnDel{
                    width: 90px;
                    height: 36px;
                    border-radius: 12px;
                    border: none;
                    background: red;
                    color: #fff;
                    font-weight: bold;
                    margin-left: 5px;
                }
            }
           }
            
        }
    }
`;