import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import "./app.css";
import AddExtension from "./components/AddExtension";
import SelectedExtensions from "./components/SelectedExtensions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<SelectedExtensions />}></Route>
          <Route path="/add" element={<AddExtension />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
