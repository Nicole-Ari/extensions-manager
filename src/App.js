import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import "./app.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
