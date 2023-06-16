import "./App.scss";
import ChooseAvatar from "./components/ChooseAvatar/ChooseAvatar";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile/Profile";
import StudentLogin from "./pages/StudentLogin";
import LeaderBoard from "./pages/LeaderBoard";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";

function App() {
  const [finalName, setFinalName] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/login/student"} element={<StudentLogin />} />
          <Route path={"/login"} />
          <Route path={"/leaderBoard"} element={<LeaderBoard />} />
          <Route
            path={"/chooseavatar/:studentId"}
            element={<ChooseAvatar setFinalName={setFinalName} />}
          />
          <Route
            path={"/profile/:studentId"}
            element={<Profile finalName={finalName} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
