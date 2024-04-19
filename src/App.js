import "./App.css";

import StartScreen from "./component/startScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Game from "./component/game";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/start" element={<StartScreen />} />
        <Route path="/game" element={<Game />} />
        <Route path="/back" element={<StartScreen />} />
      </Routes>
    </Router>
  );
};
export default App;
