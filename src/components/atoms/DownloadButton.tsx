interface DownloadButtonProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

export default function DownloadButton({ textAreaRef }: DownloadButtonProps) {
  const handleClickDownloadButton = () => {
    if (!textAreaRef.current) return;
    const text = textAreaRef.current.value;
    console.log(text);
  };
  return (
    <button
      className="btn btn-default pull-right"
      onClick={handleClickDownloadButton}
    >
      <span className="icon icon-download icon-text"></span>
      Save
    </button>
  );
}
