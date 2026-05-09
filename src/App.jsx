import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Presentacion from "./pages/Presentacion/Presentacion";
import Materias from "./pages/Materias/Materias";
import Favoritos from "./pages/Favoritos/Favoritos";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<Presentacion />} />
                    <Route path="/materias" element={<Materias />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
