import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--Dark, #1a1831);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Box = styled.div`
  width: 30%;
  height: 70%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 25px;
  border-radius: 10px;
`;
export const StyledText = styled.span`
  font-size: 16px;
  color: #333;
  text-align: left;
  margin-left: 0;
`;
export const TextInput = styled.input`
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 5%;
  border-radius: 10px;
  border: 1px solid var(--Beige, #dece9c);
  background: var(--LightGrey, #d9d9d9);
`;
export const StartButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--Primary, #20615b);
  text-align: center;
  height: 45px;
  cursor: pointer;
`;
export const Tittle = styled.text`
  font-size: 20px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 50%;
  height: 7%;
  border-radius: 10px;
  border: 1px solid var(--Beige, #dece9c);
  background: var(--LightGrey, #d9d9d9);
`;
