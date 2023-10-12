import {Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil/Accueil';
import Emplacement from './pages/emplacement/Emplacement';
import SignUp from "./accounts/SignUp";
import SignIn from "./accounts/SignIn";

function App() {
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/emplacement" element={<Emplacement/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </div>
  )
}

export default App;
