import "./App.scss";
import ChooseAvatar from "./components/ChooseAvatar/ChooseAvatar";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/chooseavatar"} element={<ChooseAvatar />} />
          <Route path={"/profile/:studentId"} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
