import logo from "./logo.svg";
import "./App.css";
import JeuDE from "./components/JeuDE";

function App() {
  return (
    <>
      <JeuDE secret={Math.floor(Math.random() * 6) + 1} />
      <JeuDE secret={Math.floor(Math.random() * 6) + 1} />
    </>
  );
}

export default App;
