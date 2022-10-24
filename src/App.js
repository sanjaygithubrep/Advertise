import "./App.css";
import Nav from "./component/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
