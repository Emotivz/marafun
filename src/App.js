import "./App.scss";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route to={"/"} />
          {/* <Route to={"/login"} /> */}
        </Routes>
      </BrowserRouter>
      <Login />
    </div>
  );
}

export default App;
