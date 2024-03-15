import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 76%;
  margin-top: 50px;

  .boxCompany {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;

    .filterButton {
      width: 163px;
      height: 48px;
      border-radius: 12px;
      border: none;
      transition: 0.2ms;
    }

    .filterButton:hover {
      background: #429ba1;
      color: #fff;
      font-weight: bold;
    }

    .btnReset {
      width: 78px;
      height: 35px;
      border-radius: 12px;
      border: none;
      background: #dbf6f8;
      font-weight: bold;
    }
  }

  .btnAdd {
    width: 35.74px;
    height: 35px;
    border-radius: 50%;
    background: #43b05c;
    border: none;
    font-size: 24px;
    color: #fff;
    transition: 0.2ms;
  }

  .btnAdd:hover {
    background: #29713a;
  }


`;
