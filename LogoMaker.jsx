import React, { useRef, useState } from "react";

const LogoMaker = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState("My Brand");
  const [color, setColor] = useState("#333333");
  const [font, setFont] = useState("Arial");

  const drawLogo = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.font = `bold 40px ${font}`;
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 10);
  };

  const downloadLogo = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "logo.png";
    a.href = url;
    a.click();
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h2 className="text-xl mb-4 font-semibold">Logo Maker</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Brend nomi"
        className="p-2 border rounded w-full mb-2"
      />

      <div className="flex justify-between mb-2">
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>

      <button onClick={drawLogo} className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
        Logoni yaratish
      </button>

      <canvas ref={canvasRef} width={400} height={200} className="border mb-2" />

      <button onClick={downloadLogo} className="bg-green-600 text-white px-4 py-2 rounded">
        Yuklab olish
      </button>
    </div>
  );
};

export default LogoMaker;
