import CommitmentCard from "../../components/CommitmentCard/CommitmentCard";
import programmersImg from "../../assets/dos-jovenes-programadores-dibujos-animados-codificando-imagen-ilustracion_1288816-15128.jpg";
import "./Presentacion.css";

/* ── Data ── */
const commitments = [
    {
        id: 1,
        text: "Participar activamente en cada clase, cumplir con todas las entregas a tiempo y mantener una actitud proactiva frente a los retos del curso.",
    },
    {
        id: 2,
        text: "Dedicar tiempo fuera del aula para investigar, practicar y profundizar en los temas vistos, fortaleciendo mis habilidades de forma continua.",
    },
    {
        id: 3,
        text: "Colaborar con mis compañeros, compartir conocimientos y contribuir a un ambiente de aprendizaje respetuoso y enriquecedor para todos.",
    },
];

export default function Presentacion() {
    return (
        <div className="present-page">
            {/* ── Hero ── */}
            <section className="present-hero">
                <div className="present-hero__text">
                    <span className="present-hero__greeting">Hola</span>
                    <h1 className="present-hero__name">
                        Somos: Santiago Duarte y Thomas Chaparro{" "}
                        <span className="present-hero__code">
                            (0192584 - 0192607)
                        </span>
                    </h1>
                    <p className="present-hero__role">
                        Diseñador y Programador WEB
                    </p>
                </div>
                <div className="present-hero__illustration">
                    <img
                        src={programmersImg}
                        alt="Dos jóvenes programadores codificando"
                    />
                </div>
            </section>

            {/* ── Commitments ── */}
            <section className="present-commitments">
                <h2 className="present-commitments__title">
                    Mis Compromisos en la materia
                </h2>
                <div className="present-commitments__cards">
                    {commitments.map(({ id, text }) => (
                        <CommitmentCard key={id} number={id} text={text} />
                    ))}
                </div>
            </section>
        </div>
    );
}
