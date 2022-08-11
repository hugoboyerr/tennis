import "./PointList.css";

export const PointList = ({ game, onCalculateScore }) => {
  if (!game.points || game.points.length === 0) {
    return <p>Aucun point n'a été trouvé.</p>;
  }

  return (
    <div>
      <p className="item_center">Détails des points:</p>
      <div className="item_center">
        <div className="item_border">
          <ul>
            {game.points.map((point, index) => (
              <li key={index}>
                Point {index + 1} : Remporté par {point.player.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="item_center">
        <button onClick={() => onCalculateScore()}>Calculer le score</button>
      </div>
    </div>
  );
};
