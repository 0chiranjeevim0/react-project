import "./App.css";
import Home from "./Components/Home";
import Application from "./Components/Application";
import Signup from "./Components/Signup";
import ProtectedComponent from "./Protected/ProctectedComponent";
import PrivateRoutes from "./Protected/PrivateRoutes";
import Login from "./Components/Login.js";
import ErrorHandler from "./Components/ErrorHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<ErrorHandler />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/author" element={<ProtectedComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
