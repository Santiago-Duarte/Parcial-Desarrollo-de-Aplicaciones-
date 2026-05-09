import { NavLink } from "react-router-dom";
import phoenixImg from "../../assets/pngtree-ave-fenix-fire-blue-metalic-png-image_20012049.png";
import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar__inner">
                <NavLink to="/" className="navbar__logo" aria-label="Inicio">
                    <img
                        src={phoenixImg}
                        alt="Logo Fénix"
                        width="44"
                        height="44"
                    />
                </NavLink>

                <nav className="navbar__links">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "navbar__link navbar__link--active"
                                : "navbar__link"
                        }
                    >
                        Presentacion
                    </NavLink>
                    <NavLink
                        to="/materias"
                        className={({ isActive }) =>
                            isActive
                                ? "navbar__link navbar__link--active"
                                : "navbar__link"
                        }
                    >
                        Materias
                    </NavLink>
                    <NavLink
                        to="/favoritos"
                        className={({ isActive }) =>
                            isActive
                                ? "navbar__link navbar__link--active"
                                : "navbar__link"
                        }
                    >
                        Favoritos
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
