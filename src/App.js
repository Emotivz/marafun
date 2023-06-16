import "./App.scss";
import ChooseAvatar from "./components/ChooseAvatar/ChooseAvatar";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route to={"/"} />
          <Route to={"/login"} />
        </Routes>
      </BrowserRouter>
      <Login />
      <ChooseAvatar />
    </div>
  );
}

export default App;
