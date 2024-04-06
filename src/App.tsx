import Header from "./components/Header";
import "./plugin/photon/css/photon.css";

function App() {
  return (
    <div className="window">
      <Header />
      <div className="window-content">
        <div className="padded-more">
          <h1>Hello, World!</h1>
          <p>
            Thanks for downloading Photon. This is an example HTML page that is
            linked up to compiled Photon CSS, has the proper meta tags and the
            HTML structure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
