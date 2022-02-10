import styled from "@emotion/styled/macro";

export const Container = styled.div`
  /* margin-bottom: 20px; */
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Title = styled.p`
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const SnakeBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
  border: 1px solid #161d2a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding: 2px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: #ff751d;
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 90px;
  padding: 2px 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: #ff751d;
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
`;

export const ModalTitle = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const ModalText = styled.span`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const ScoreContainer = styled.div`
  margin-bottom: 20px;
`;

export const SnakeGrid = styled.div`
  width: 4%;
  height: 4%;
  outline: 1px solid #dfdfdf;
`;
export const SnakeDot = styled.div`
  position: absolute;
  width: 4%;
  height: 4%;
  background-color: green;
  border: 1px solid #fff;
  z-index: 2;
`;
