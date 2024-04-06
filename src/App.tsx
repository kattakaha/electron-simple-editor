import Header from "./components/Header";
import "./plugin/photon/css/photon.css";

function App() {
  return (
    <div className="window">
      <Header />
      <div className="window-content">
        <textarea
          style={{
            width: "100%",
            height: "100%",
            padding: "10px",
            resize: "none",
            border: "none",
            outline: "none",
            fontSize: "18px",
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default App;
