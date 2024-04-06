interface MinusButtonProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
}

export default function MinusButton({ textAreaRef }: MinusButtonProps) {
  const handleClickMinusButton = () => {
    if (!textAreaRef.current) return;
    const currentTextSize = parseInt(textAreaRef.current.style.fontSize);
    textAreaRef.current.style.fontSize = `${currentTextSize - 1}px`;
  };
  return (
    <button className="btn btn-default" onClick={handleClickMinusButton}>
      <span className="icon icon-minus"></span>
    </button>
  );
}
