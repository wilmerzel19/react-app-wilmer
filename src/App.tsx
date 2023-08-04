import "./css/estilos.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Inicio } from "./pages/Inicio";
import { Eventos } from "./pages/Eventos";
import { Sedes } from "./pages/Sedes";
import { Promociones } from "./pages/Promociones";
import { Ayuda } from "./pages/Ayuda";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import Login from "./Login";

export default function App() {
  const [mostrar, setMostrar] = useState(0);
  const [perfil, setPerfil] = useState(0);
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const handleLogout = () => {
    // Limpiamos los datos de inicio de sesión almacenados en localStorage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    // Redireccionamos al usuario al componente de inicio de sesión
    window.location.reload(); // Recargar la
  };

  return (
    <>
      <Header
        mostrar={mostrar}
        setMostrar={setMostrar}
        perfil={perfil}
        setPerfil={setPerfil}
      />
      <Aside
        mostrar={mostrar}
        setMostrar={setMostrar}
        perfil={perfil}
        setPerfil={setPerfil}
      />
      <>
        <div>
          {isLoggedIn ? (
            <div className="text-center">
              <button
                className="px-4 py-2 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={handleLogout}
              ></button>
            </div>
          ) : (
            <Login />
          )}
        </div>
      </>

      <main className="p-4 mt-4">
        <section className="container p-4 m-auto shadow-lg">
          <Routes>
            <Route path="/inicio" element={<Inicio />}></Route>
            <Route path="/eventos" element={<Eventos />}></Route>
            <Route path="/sedes" element={<Sedes />}></Route>
            <Route path="/promociones" element={<Promociones />}></Route>
            <Route path="/ayuda" element={<Ayuda />}></Route>
          </Routes>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 h-auto text-white border-t-4 border-violet-800 bg-cyan-600">
        <div className="container p-4 m-auto">
          <p className="text-center">Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}
