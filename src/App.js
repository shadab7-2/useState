
import './App.css';
import { useState } from 'react';

function App() {
  const [start , end] = useState("");
  const [headingText, setHeading] = useState("");

  const handleClick = (event) => {

    setHeading(start);
  }

  const handleChange = (event) => {
    end(event.target.value);
  }

  return (
    <div className='app'>
      <h1>Hi my name is: {headingText}!</h1>
      <form>
        <input className='inputTah' placeholder='write name'  onChange={handleChange} value={start}/>
        <button type="submit" onClick={handleClick} >Submit</button>
      </form>
    </div>
  );
}

export default App;
