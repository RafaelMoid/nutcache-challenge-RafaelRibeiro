import Popup from "./components/Popup";
import {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
     
  const [selectedDate, setSelectedDate] = useState(null);      

  return (
    <div className="App">
     
      <main>
        <h1>Nutcache employees register tool</h1>
        <br/><br/>
        <button onClick={() => setButtonPopup(true)}>Register new employee</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Register employee</h3><br/>
          <div className="formGroup">
              <p>
                 <strong>Name</strong><br/> <input type="text" name="name" placeholder="Name" required/>
              </p><br/>
              <p>
                  <strong>Birth date</strong><br/> <DatePicker required name="birthDate" placeholder="Birth date" selected={selectedDate} onChange={date =>setSelectedDate(date)} />
              </p><br/>
              <p>
                  <strong>Gender</strong><br/><input type="text" name="gender" placeholder="Gender" required></input>
              </p><br/>
              <p>
                  <strong>E-mail</strong><br/> <input type="email" name="email" placeholder="E-mail " required></input>
              </p><br/>
              <p>
                  <strong>CPF</strong><br/> <input type="text" name="cpf" placeholder="CPF" required></input>
              </p><br/>
              <p>
                  Start date<br/> <input type="text" name="startDate" placeholder="Start date" required></input>
              </p><br/>
              <p>
                  <strong>Team</strong><br/> <input type="text" name="team" placeholder="Team" required></input>
              </p><br/>
              <button className="btnRegister">Register</button>
          </div>
        </Popup>
      </main>
    </div>
  );
}

export default App;
