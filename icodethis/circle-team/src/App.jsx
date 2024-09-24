import "./App.css";
import PersonIcon from "./assets/man.png";

function App() {
  const calculatePosition = (index, total) => {
    const angle = (index / total) * 2 * Math.PI;
    const radius = 150;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };
  return (
    <div className="container">
      <div className="main-image-container">
        <img className="main-image" src={PersonIcon} alt="icon" />
        <svg viewBox="0 0 100 100" width="100%" height="100%" className="svg">
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text fontSize="7.5">
            <textPath xlinkHref="#circlePath" startOffset="15%">
              Ryan Williams - BackEnd Dev
            </textPath>
          </text>
        </svg>
      </div>

      {Array(7)
        .fill(0)
        .map((item, index) => {
          const { x, y } = calculatePosition(index, 5);
          return (
            <div
              key={index}
              className="circle-item"
              style={{ transform: `translate(${x + 200}px, ${y + 225}px)` }}
            >
              <img className="item" src={PersonIcon} alt="circle-icon" />
            </div>
          );
        })}
    </div>
  );
}

export default App;
