import "./App.scss";
import Header from "./components/Header/Header";
import Login from "./pages/Login";
import LeaderBoard from "./pages/LeaderBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} />
          <Route path={"/login"} />
          <Route path={"/leaderBoard"} element={<LeaderBoard/>}/>
        </Routes>
      </BrowserRouter>
      <Login />
    </div>
  );
}

export default App;
