import { BrowserRouter,Navigate,Routes,Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";

function App() {
  
  return (
    <div className="app">
      {/*CONFIGURACION DE LAS RUTAS DE LA APP */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />  {/*SE LE INDICA QUE EN LA RUTA MAIN SE RENDERIZE EL COMPONENTE DE LOGINPAGE*/}
          <Route path="/home" element={<HomePage/>} /> 
          <Route path="/profile/:userId" element={<ProfilePage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
