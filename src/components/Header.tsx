import DownloadButton from "./atoms/DownloadButton";
import MinusButton from "./atoms/MinusButton";
import PlusButton from "./atoms/PlusButton";

interface HeaderProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

export default function Header({ textAreaRef }: HeaderProps) {
  return (
    <header className="toolbar toolbar-header">
      <h1 className="title">Editor</h1>
      <div className="toolbar-actions">
        <div className="btn-group">
          <PlusButton textAreaRef={textAreaRef} />
          <MinusButton textAreaRef={textAreaRef} />
        </div>
        <DownloadButton textAreaRef={textAreaRef} />
      </div>
    </header>
  );
}
