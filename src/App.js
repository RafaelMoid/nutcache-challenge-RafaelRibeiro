import Popup from "./components/Popup";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Nutcache employees register tool</h1>
        <br/><br/>
        <button>Register new employee</button>
        <Popup trigger={false}>
          <h3>Register employee</h3>
        </Popup>
      </main>
    </div>
  );
}

export default App;
