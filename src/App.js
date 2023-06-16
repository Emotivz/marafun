import "./App.scss";
import ChooseAvatar from "./components/ChooseAvatar/ChooseAvatar";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile/Profile";
import StudentLogin from "./pages/StudentLogin";
import LeaderBoard from "./pages/LeaderBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/login/student"} element={<StudentLogin />} />
          <Route path={"/login"} />
          <Route path={"/leaderBoard"} element={<LeaderBoard />} />
          <Route path={"/chooseavatar"} element={<ChooseAvatar />} />
          <Route path={"/profile/:studentId"} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
