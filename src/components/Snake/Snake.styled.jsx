import styled from "@emotion/styled/macro";

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
