import "./App.css";
import { Register } from "./component/Register/Register";
import { Player } from "./classes/Player";
import { Game } from "./classes/Game";
import {useState} from "react";
import { PointList } from "./component/PointList/PointList";

function App() {
  const [game, setGame] = useState(null);


  const onSubmit = (event) => {
    event.preventDefault();
    const target = event.target;

    if (target) {
        const formData = new FormData(target);
        const player1 = new Player(formData.get("player1[name]"), parseInt(formData.get("player1[level]")));
        const player2 = new Player(formData.get("player2[name]"), parseInt(formData.get("player2[level]")));
        const newGame = new Game(player1, player2);
        setGame(newGame);
    }
};



  return (
    <div className="App container">
      <Register  onSubmit={onSubmit} />
      {game && <PointList game={game}/>}
    </div>
  );
}

export default App;
