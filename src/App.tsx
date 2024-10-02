import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/auth/Login.tsx";
import Register from "./screen/auth/Register.tsx";
import Match from "./screen/Match.tsx";
import RecoverPassword from "./screen/auth/RecoverPassword.tsx";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route 
        path="/" 
        element={<Login/>}
        />
    
        <Route
        path="/register"
        element={<Register/>}
        />

        <Route
        path="/match"
        element={<Match/>}
        />

        <Route
        path="/recover_password"
        element={<RecoverPassword/>}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
