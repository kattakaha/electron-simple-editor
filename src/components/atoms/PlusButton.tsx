interface PlusButtonProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

export default function PlusButton({ textAreaRef }: PlusButtonProps) {
  const handleClickPlusButton = () => {
    if (!textAreaRef.current) return;
    const currentTextSize = parseInt(textAreaRef.current.style.fontSize);
    textAreaRef.current.style.fontSize = `${currentTextSize + 1}px`;
  };
  return (
    <button className="btn btn-default" onClick={handleClickPlusButton}>
      <span className="icon icon-plus"></span>
    </button>
  );
}
