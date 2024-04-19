import React from "react";
import { Alert, Space } from "antd";
import { useState } from "react";
import {
  Box,
  StyledText,
  TextInput,
  Wrapper,
  StartButton,
  Input,
  Tittle,
} from "./startScreenStyle";
import { useNavigate } from "react-router-dom";
const StartScreen = () => {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [tableSize, setTableSize] = useState(5);

  const handleInputChange = (event) => {
    setTableSize(event.target.value);
  };
  const [state, setState] = useState({
    playerone: "",
    playertwo: "",
  });

  const handleChangeFirstPlayerName = (event) => {
    setState({
      ...state,
      playerone: event.target.value,
    });
  };
  const handleChangeSecondPlayerName = (event) => {
    setState({
      ...state,
      playertwo: event.target.value,
    });
  };
  const handleClick = () => {
    localStorage.setItem("player1", state.playerone);
    localStorage.setItem("player2", state.playertwo);
    if (tableSize < 5 || tableSize > 100) {
      setShowAlert(true);
    } else {
      navigate("/game");
      localStorage.setItem("TableSize", tableSize);
    }
  };
  return (
    <Wrapper>
      <Box>
        <StyledText>Player 1</StyledText>
        <TextInput
          placeholder="Player Name 1"
          value={state.playerone}
          onChange={handleChangeFirstPlayerName}
        ></TextInput>
        <StyledText>Player 2</StyledText>
        <TextInput
          placeholder="Player Name 2"
          value={state.playertwo}
          onChange={handleChangeSecondPlayerName}
        ></TextInput>
        <Tittle>Enter size of table</Tittle>
        <Input
          type="number"
          placeholder="Example: 5"
          value={tableSize}
          onChange={handleInputChange}
          min={5}
          max={100}
        />

        <StartButton onClick={handleClick}>Start game</StartButton>
        {showAlert && (
          <Alert
            message="Error size of table"
            description="Size table must be between 5 and 100"
            type="error"
            closable
            onClose={() => setShowAlert(false)}
          />
        )}
      </Box>
    </Wrapper>
  );
};

export default StartScreen;
