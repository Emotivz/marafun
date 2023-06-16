import "./App.scss";
import Login from "./pages/Login";
import StudentLogin from "./pages/StudentLogin";
import LeaderBoard from "./pages/LeaderBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/login/student"} element={<StudentLogin />} />
          <Route path={"/login"} />
          <Route path={"/leaderBoard"} element={<LeaderBoard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
