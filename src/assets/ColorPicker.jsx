import { useState } from "react";


const ColorPicker = () => {

  const [color, setColor] = useState('#ffffff');

  const handleColor = (e)=> {
    setColor(e.target.value);
  }

  return <>
    <div className="color-picker-container">
      <h1>Color Palatte</h1>
      <div className="color-display" style={{backgroundColor:color}}>
        <p>Selected Color: {color} </p>
      </div>
      <label htmlFor="">Selet a Color: </label>
      <input type="color" value={color} onChange={handleColor} />
    </div>
  </>

}

export default ColorPicker;