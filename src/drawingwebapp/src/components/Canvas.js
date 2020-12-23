import React, { useRef, useEffect } from "react";

function Canvas({ updateImageToSend }) {
  const canvasRef = useRef(null);
  var x = 0;
  var y = 0;

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.addEventListener("mousedown", detectMouseDown, false);
    canvas.addEventListener("mouseup", deactivateDrawing, false);
    canvas.addEventListener("mouseout", deactivateDrawing, false);
  }, []);

  const detectMouseDown = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;

    context.beginPath();
    context.fillStyle = "black";
    context.arc(x, y, 4, 0, 360, false);
    context.closePath();

    canvas.addEventListener("mousemove", draw, false);

    updateImageToSend(canvas.toDataURL());
  };

  const draw = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    var startX = x;
    var startY = y;
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineCap = "round";
    context.lineTo(x, y);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();
    context.closePath();

    updateImageToSend(canvas.toDataURL());
  };

  const deactivateDrawing = (e) => {
    const canvas = canvasRef.current;
    canvas.removeEventListener("mousemove", draw, false);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={640}
        height={425}
        style={{ borderStyle: "solid" }}
      />
    </div>
  );
}

export default Canvas;
