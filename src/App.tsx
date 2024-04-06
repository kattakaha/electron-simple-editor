import { useRef } from "react";
import Header from "./components/Header";
import "./plugin/photon/css/photon.css";
import { DEFAULT_FONT_SIZE } from "./constants";

function App() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  window.ipcRenderer.on("saved", (_event, results) => {
    if (!textAreaRef.current) return;
    if (results === "success") {
      textAreaRef.current!.style.backgroundColor = "lightgreen";
    } else {
      textAreaRef.current!.style.backgroundColor = "lightcoral";
    }
    setTimeout(() => {
      textAreaRef.current!.style.backgroundColor = "white";
    }, 300);
  });

  return (
    <div className="window">
      <Header textAreaRef={textAreaRef} />
      <div className="window-content">
        <textarea
          ref={textAreaRef}
          style={{
            width: "100%",
            height: "100%",
            padding: "10px",
            resize: "none",
            border: "none",
            outline: "none",
            fontSize: `${DEFAULT_FONT_SIZE}px`,
          }}
        />
      </div>
    </div>
  );
}

export default App;
