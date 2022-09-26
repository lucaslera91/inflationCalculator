import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/Form";
import Main from "./components/container/Main";
import DuesProvider from "./context/DuesProvider";

function App() {
  return (
    <DuesProvider>
      <div className="App">
        <Main />
      </div>
    </DuesProvider>
  );
}

export default App;
