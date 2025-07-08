import { type ComponentRef, type MouseEvent, useState } from "react";

function ClickCoordinates() {
  const [buttonCoords, setButtonCoords] = useState<{ x: number; y: number }[]>(
    []
  );

  const handleCreateBtn = (e: MouseEvent<ComponentRef<"div">>) => {
    const containerRect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    setButtonCoords([{ x, y }, ...buttonCoords]);
  };

  const handleUndo = () => {
    const [, ...rest] = buttonCoords;
    setButtonCoords(rest);
  };

  return (
    <>
      <div>
        <button
          style={{ background: "blue", marginBottom: 10 }}
          onClick={handleUndo}
        >
          Undo
        </button>
      </div>
      <div
        id="container"
        style={{
          width: 500,
          height: 500,
          background: "lightGrey",
          position: "relative",
          overflow: "hidden",
        }}
        onClick={handleCreateBtn}
      >
        {buttonCoords.length > 0 &&
          buttonCoords.map(({ x, y }, index) => (
            <button
              key={`${x}-${y}-${index}`}
              style={{
                left: x,
                top: y,
                background: "red",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                border: "1px solid black",
              }}
            ></button>
          ))}
      </div>
    </>
  );
}

export default ClickCoordinates;
