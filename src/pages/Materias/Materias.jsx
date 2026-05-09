import { useState } from "react";
import "./Materias.css";

/* ── Subject data ── */
const materias = [
    {
        id: 1,
        nombre: "Diseño web y sistemas operativos",
        descripcion:
            "Exploración de los principios fundamentales del diseño web moderno, incluyendo teoría del color, tipografía, layouts responsivos y la interacción entre interfaces gráficas y sistemas operativos. Se estudian herramientas actuales de diseño UI/UX y su integración con entornos de desarrollo.",
    },
    {
        id: 2,
        nombre: "Desarrollo de aplicaciones web",
        descripcion:
            "Desarrollo de aplicaciones web dinámicas e interactivas utilizando tecnologías modernas como React, JavaScript ES6+, HTML5 y CSS3. Se aplican patrones de componentes, manejo de estado, consumo de APIs y buenas prácticas de desarrollo frontend y backend.",
    },
    {
        id: 3,
        nombre: "Gestión de base de datos",
        descripcion:
            "Fundamentos del diseño, modelado e implementación de bases de datos relacionales y no relacionales. Abarca el lenguaje SQL, normalización, optimización de consultas, transacciones y el uso de sistemas gestores como MySQL y PostgreSQL en entornos reales.",
    },
    {
        id: 4,
        nombre: "Inteligencia artificial",
        descripcion:
            "Introducción a los conceptos y técnicas de la inteligencia artificial, incluyendo machine learning, redes neuronales, procesamiento de lenguaje natural y visión por computadora. Se trabajan herramientas como Python, TensorFlow y modelos de IA generativa.",
    },
];

/* ── Reusable sidebar item ── */
function MateriaItem({ materia, isActive, onClick }) {
    return (
        <button
            className={`materias__item ${isActive ? "materias__item--active" : ""}`}
            onClick={() => onClick(materia)}
            aria-pressed={isActive}
        >
            {materia.nombre}
        </button>
    );
}

/* ── Detail panel ── */
function MateriaDetail({ materia }) {
    if (!materia) {
        return (
            <div className="materias__detail materias__detail--empty">
                <p>Selecciona una materia para ver su descripción.</p>
            </div>
        );
    }

    return (
        <div className="materias__detail" key={materia.id}>
            <h2 className="materias__detail-title">{materia.nombre}</h2>
            <p className="materias__detail-desc">{materia.descripcion}</p>
        </div>
    );
}

export default function Materias() {
    const [selected, setSelected] = useState(materias[0]);

    return (
        <div className="materias-page">
            <div className="materias__container">
                {/* ── Sidebar ── */}
                <aside className="materias__sidebar">
                    {materias.map((m) => (
                        <MateriaItem
                            key={m.id}
                            materia={m}
                            isActive={selected?.id === m.id}
                            onClick={setSelected}
                        />
                    ))}
                </aside>

                {/* ── Content panel ── */}
                <section className="materias__content">
                    <MateriaDetail materia={selected} />
                </section>
            </div>
        </div>
    );
}
