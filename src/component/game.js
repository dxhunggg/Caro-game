import { useState } from "react";
import {
  BoardCell,
  BoardRow,
  GameContainer,
  Container,
  WrapperGame,
  TaskBar,
} from "./gameStyle.js";

import { Button, Modal, Space, Avatar, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  ArrowLeftOutlined,
  HomeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
export const createBoard = (tableSize) => {
  const board = [];
  for (let i = 0; i < tableSize; i++) {
    board.push([]);
    for (let j = 0; j < tableSize; j++) {
      board[i].push("");
    }
  }
  return board;
};

const Game = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const handleRestart = () => {
    setIsModalOpen(false);
    setBoard(createBoard(tableSize));
    setCurrentPlayer("X");
    setPreviousBoard(null);
    setConfirmUndo(false);
    setWinner(false);
    setWinningCells([]);
  };
  const handleBackToMenu = () => {
    navigate("/back");
  };
  const [previousBoard, setPreviousBoard] = useState(null);
  const toggleConfirmUndo = () => {
    if (!confirmUndo) {
      setConfirmUndo(true);
    } else {
      undo();
      setConfirmUndo(false);
    }
  };

  const undo = () => {
    if (confirmUndo) {
      if (window.confirm("Cho ik lại ik mà ^^")) {
        if (previousBoard) {
          setBoard(previousBoard);
          setPreviousBoard(null);
          setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
          setWinner(false);
        }
      }
      setConfirmUndo(false);
    } else {
      setConfirmUndo(true);
    }
  };

  const [confirmUndo, setConfirmUndo] = useState(false);

  const tableSize = localStorage.getItem("TableSize");
  const [board, setBoard] = useState(createBoard(tableSize));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(false);

  const handleClick = (row, col) => {
    if (!board[row][col] && !winner) {
      const newBoard = board.map((rowArr, rowIndex) =>
        rowIndex === row
          ? rowArr.map((cell, colIndex) =>
              colIndex === col ? currentPlayer : cell
            )
          : rowArr
      );
      setPreviousBoard([...board]);
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

      if (checkWin(row, col)) {
        const winningCells = findWinningCells(row, col);
        setWinningCells(winningCells);
        setWinner({ winner: currentPlayer });
        setModalContent(
          `${
            currentPlayer === "X"
              ? localStorage.getItem("player1")
              : localStorage.getItem("player2")
          } win!`
        );
        setIsModalOpen(true);
      } else if (isDraw(newBoard)) {
        setModalContent("Drawwwwwwwww!");
        setIsModalOpen(true);
      }
    }
  };
  const checkWin = (row, col) => {
    const directions = [
      [1, 0],
      [0, 1],
      [1, 1],
      [1, -1],
    ];

    for (const [dx, dy] of directions) {
      let count = 1;

      for (let i = 1; i < 5; i++) {
        const newRow = row + i * dx;
        const newCol = col + i * dy;

        if (
          newRow >= 0 &&
          newRow < tableSize &&
          newCol >= 0 &&
          newCol < tableSize &&
          board[newRow][newCol] === currentPlayer
        ) {
          count++;
        } else {
          break;
        }
      }

      for (let i = 1; i < 5; i++) {
        const newRow = row - i * dx;
        const newCol = col - i * dy;

        if (
          newRow >= 0 &&
          newRow < tableSize &&
          newCol >= 0 &&
          newCol < tableSize &&
          board[newRow][newCol] === currentPlayer
        ) {
          count++;
        } else {
          break;
        }
      }

      if (count >= 5) {
        return true;
      }
    }

    return false;
  };
  const isDraw = (board) => {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === "") {
          return false;
        }
      }
    }
    return true;
  };
  const [winningCells, setWinningCells] = useState([]);
  const findWinningCells = (row, col) => {
    const winningCells = [];
    const directions = [
      [1, 0],
      [0, 1],
      [1, 1],
      [1, -1],
    ];

    for (const [dx, dy] of directions) {
      let count = 1;
      const cells = [{ row, col }];

      for (let i = 1; i < 5; i++) {
        const newRow = row + i * dx;
        const newCol = col + i * dy;

        if (
          newRow >= 0 &&
          newRow < tableSize &&
          newCol >= 0 &&
          newCol < tableSize &&
          board[newRow][newCol] === currentPlayer
        ) {
          count++;
          cells.push({ row: newRow, col: newCol });
        } else {
          break;
        }
      }

      for (let i = 1; i < 5; i++) {
        const newRow = row - i * dx;
        const newCol = col - i * dy;

        if (
          newRow >= 0 &&
          newRow < tableSize &&
          newCol >= 0 &&
          newCol < tableSize &&
          board[newRow][newCol] === currentPlayer
        ) {
          count++;
          cells.push({ row: newRow, col: newCol });
        } else {
          break;
        }
      }

      if (count >= 5) {
        winningCells.push(...cells);
      }
    }
    return winningCells;
  };
  return (
    <Container>
      <div style={{ position: "absolute", top: 20, left: 20 }}>
        <div>
          <Space direction="vertical" size={16}>
            <Space wrap size={16}>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                style={{
                  border: currentPlayer === "X" ? "3px solid lightgreen" : "",
                  borderRadius: "50%",
                }}
              />
            </Space>
          </Space>
        </div>
        <div>{localStorage.getItem("player1")} </div>
      </div>
      <WrapperGame>
        <TaskBar>
          <Flex gap="small" vertical>
            <Flex gap="small" align="center" wrap="wrap">
              <Button
                type="primary"
                icon={<ArrowLeftOutlined />}
                onClick={toggleConfirmUndo}
                style={{ backgroundColor: "#d2691e" }}
              />
              <Button
                type="primary"
                icon={<ReloadOutlined />}
                onClick={handleRestart}
                style={{ backgroundColor: "#d2691e" }}
              />
              <Button
                type="primary"
                icon={<HomeOutlined />}
                onClick={handleBackToMenu}
                style={{ backgroundColor: "#d2691e" }}
              />
            </Flex>
          </Flex>
        </TaskBar>
        <GameContainer>
          {board.map((row, rowIndex) => (
            <BoardRow key={rowIndex}>
              {row.map((cell, colIndex) => (
                <BoardCell
                  key={colIndex}
                  onClick={() => handleClick(rowIndex, colIndex)}
                  style={{
                    backgroundColor: winningCells.some(
                      (cell) => cell.row === rowIndex && cell.col === colIndex
                    )
                      ? "yellow"
                      : "",
                  }}
                >
                  {cell}
                </BoardCell>
              ))}
            </BoardRow>
          ))}
        </GameContainer>
      </WrapperGame>
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <div>
          <Space direction="vertical" size={16}>
            <Space wrap size={16}>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                style={{
                  border: currentPlayer === "O" ? "3px solid lightgreen" : "",
                  borderRadius: "50%",
                }}
              />
            </Space>
          </Space>
        </div>
        <div>{localStorage.getItem("player2")} </div>
      </div>

      <Modal
        title="Game Over"
        open={isModalOpen}
        footer={null}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <p>{modalContent}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={handleRestart}>Restart</Button>
          <Button onClick={handleBackToMenu}>Back to menu</Button>
        </div>
      </Modal>
    </Container>
  );
};

export default Game;
