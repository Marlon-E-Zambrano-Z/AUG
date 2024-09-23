import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/Login";
import Register from "./screen/Register";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
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
