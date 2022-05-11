//import logo from './logo.svg';
import react from 'react';
import "./App.css";

// You don't import the file with the logic
import { medida as showMedida } from "./Logic";

// Is now usable
// READ ALL THE COMMENTS, PLEASE
function App(props) {

  // There not exist a action that called the logic
  const action = (e) => {
    // This is for stop redirect action
    e.preventDefault();
    const value = document.getElementById('Sizeipt').value;
    showMedida(Number(value));
  };

  return (
    <div className="App">
      <form>
          {/* INPUT TO ADD DATA */}
          {/* Intup wrapped with a label tag, i dont know why */}
          {/* There not exist a label that indicate what i need to do */}
          <h2><label>Digite su medida</label></h2>
          <br/>
          <label>Debe ser en el rango 160 {"<--->"} 195</label>
          <br/>
          <input
            type="number"
            name="name"
            placeholder="Size of bicicle:"
            id="Sizeipt"
          />
        {/* SUMMIT BUTTON */}
        {/* This button do not use a action */}
        <input type="submit" value="Click" id="btnclick" onClick={action} />
      </form>
    </div>
  );
}

export default App;
