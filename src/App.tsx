import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/Login";
import Register from "./screen/Register";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route
        path="/"
        element={
        <h1 style={{overflow:"hidden"}}>
          Esta es la raíz por ahora no se toca. Podría ir una landing page
        </h1>}/>
        
        <Route 
        path="/login" 
        element={<Login/>}
        />
    
        <Route
        path="/register"
        element={<Register/>}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
