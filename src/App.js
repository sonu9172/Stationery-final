import { app } from "./firebase";
import SigninPage from "./Pages/Signin";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/Signin";
import Dashboard from "./Pages/dashboard";

function App() {
  return (
    <BrowserRouter>

        
       <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
      
    </BrowserRouter>
  );
}

export default App;
