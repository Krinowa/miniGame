import "./App.css";
import Game from "./components/Game/Game";
import Constants from "./utils/constants";

const App = () => {
  return (
    <Game
      numberOfBallons={Constants.gameCells}
      gameDuration={Constants.gameDuration}
    />
  );
};

export default App;
