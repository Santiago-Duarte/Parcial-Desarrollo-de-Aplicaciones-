import LearningCard from "../../components/LearningCard/LearningCard";
import "./Favoritos.css";

/* ── "Cosas que me gustaría aprender" data ── */
const learnings = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&auto=format&fit=crop",
        title: "Inteligencia Artificial",
        desc: "Me gustaría aprender más sobre modelos de IA, machine learning y automatización de procesos.",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop",
        title: "Cloud Computing",
        desc: "Quiero aprender a desplegar aplicaciones en la nube utilizando servicios modernos y escalables.",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop",
        title: "Ciberseguridad",
        desc: "Me interesa conocer técnicas de protección de datos, hacking ético y seguridad informática.",
    },
];

export default function Favoritos() {
    return (
        <div className="favoritos-page">
            {/* ── Favorite subject card ── */}
            <section className="fav-card">
                <div className="fav-card__header">
                    <span className="fav-card__label">Materia Favorita</span>
                    <h1 className="fav-card__title">
                        Desarrollo de Aplicaciones Web
                    </h1>
                </div>
                <p className="fav-card__desc">
                    Esta materia me gusta porque permite crear aplicaciones
                    modernas, dinámicas e interactivas. Además, combina diseño,
                    lógica y creatividad para construir soluciones reales.
                </p>

                {/* ── Why I like it ── */}
                <div className="fav-card__why">
                    <h2 className="fav-card__why-title">¿Por qué me gusta?</h2>
                    <p className="fav-card__why-text">
                        Me interesa el desarrollo web porque constantemente
                        aparecen nuevas tecnologías y herramientas. También me
                        gusta poder diseñar interfaces atractivas y mejorar la
                        experiencia de los usuarios.
                    </p>
                </div>
            </section>

            {/* ── Learning wishes ── */}
            <section className="fav-learn">
                <h2 className="fav-learn__title">
                    Cosas que me gustaría aprender
                </h2>
                <div className="fav-learn__cards">
                    {learnings.map(({ id, image, title, desc }) => (
                        <LearningCard
                            key={id}
                            image={image}
                            title={title}
                            desc={desc}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
