import "./App.scss";
import ChooseAvatar from "./components/ChooseAvatar/ChooseAvatar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Login />
      <ChooseAvatar />
    </div>
  );
}

export default App;
