import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  /* min-width: 100vw; */
  min-height: 100vh;
  box-sizing: border-box;
`;
export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  flex-direction: column;
`;

export const BoardRow = styled.div`
  display: flex;
`;

export const BoardCell = styled.div`
  background: white;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
    opacity: 0.5;
  }
`;

export const WrapperGame = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffdead;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 20px;
  /* max-height: 100%; */
  min-width: 100%;
  padding-bottom: 20px;
`;

export const TaskBar = styled.div`
  display: "flex";
  justify-content: "center";
  align-items: "flex-start";
  padding: 10px;
`;
export const AvaWrapperLeft = styled.div`
  position: "absolute";
  top: 20;
  left: 20;
`;
export const AvaWrapperRight = styled.div`
  position: "absolute";
  top: 20;
  right: 20;
`;
