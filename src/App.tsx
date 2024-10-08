import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/auth/Login.tsx";
import AdviserRegister from "./screen/auth/AdviserRegister.tsx";
import LearnerRegister from "./screen/auth/LearnerRegister.tsx";
import ChooseUser from "./screen/auth/ChooseUser.tsx";
import Match from "./screen/Match.tsx";
import RecoverPassword from "./screen/auth/PasswordRecovery.tsx";
import LandingPage from "./screen/LandingPage.tsx";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route 
        path="/" 
        element={<LandingPage/>}
        />
        
        <Route 
        path="/inicio_sesion" 
        element={<Login/>}
        />
        
        <Route 
        path="/registro" 
        element={<ChooseUser />}
        />
        
        <Route
        path="/registro/aprendiz"
        element={<LearnerRegister/>}
        />

        <Route
        path="/registro/asesor"
        element={<AdviserRegister/>}
        />

        <Route
        path="/emparejamiento"
        element={<Match/>}
        />

        <Route
        path="/recuperar_contrasena"
        element={<RecoverPassword/>}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
