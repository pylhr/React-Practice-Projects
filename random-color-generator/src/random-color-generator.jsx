import './style.css';
import { useState } from 'react';

function RandomColorGenerator() {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');
  const [recentColors, setRecentColors] = useState([]);
  const [displayedColorType, setDisplayedColorType] = useState('Hex');
  const [displayedColorCode, setDisplayedColorCode] = useState('#000000');

  function hexColor() {
    const hexChars = '0123456789ABCDEF';
    let hexColorCode = '#';

    for (let i = 0; i < 6; i++) {
      hexColorCode += hexChars[Math.floor(Math.random() * 16)];
    }
    return hexColorCode;
  }

  function rgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  }

  function handleCreateRandomColor() {
    let newColor, newColorType;
    if (colorType === 'hex') {
      newColor = hexColor();
      newColorType = 'Hex';
    } else if (colorType === 'rgb') {
      newColor = rgbColor();
      newColorType = 'RGB';
    }
    setColor(newColor);
    setDisplayedColorType(newColorType);
    setDisplayedColorCode(newColor);
    setRecentColors([newColor, ...recentColors.slice(0, 4)]);
  }

  function handleColorSwatchClick(selectedColor) {
    setColor(selectedColor);
    setDisplayedColorCode(selectedColor);
  }

  return (
    <div className="app" style={{ background: color }}>
      <div className="container">
        <h1>Random Color Generator</h1>
        <div className="button-group">
          <button onClick={handleCreateRandomColor}>Generate Random Color</button>
          <button onClick={() => setColorType('rgb')}>Create RGB Color</button>
          <button onClick={() => setColorType('hex')}>Create Hex Color</button>
        </div>
        <div className="color-info">
          <p>Color Type: {displayedColorType}</p>
          <p>Color Code: {displayedColorCode}</p>
        </div>
        <div className="swatches">
          {recentColors.map((swatch, index) => (
            <div
              key={index}
              className="swatch"
              style={{ background: swatch }}
              onClick={() => handleColorSwatchClick(swatch)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
