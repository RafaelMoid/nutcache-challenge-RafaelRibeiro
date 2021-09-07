import Popup from "./components/Popup";
import {useState} from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <div className="App">
      <main>
        <h1>Nutcache employees register tool</h1>
        <br/><br/>
        <button onClick={() => setButtonPopup(true)}>Register new employee</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Register employee</h3>
          <p>It's necessary to add fields with the data requsites</p>
        </Popup>
      </main>
    </div>
  );
}

export default App;
