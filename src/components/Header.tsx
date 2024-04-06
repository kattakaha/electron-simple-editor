import DownloadButton from "./atoms/DownloadButton";
import MinusButton from "./atoms/MinusButton";
import PlusButton from "./atoms/PlusButton";

export default function Header() {
  return (
    <header className="toolbar toolbar-header">
      <h1 className="title">Header</h1>
      <div className="toolbar-actions">
        <div className="btn-group">
          <PlusButton />
          <MinusButton />
        </div>
        <DownloadButton />
      </div>
    </header>
  );
}
