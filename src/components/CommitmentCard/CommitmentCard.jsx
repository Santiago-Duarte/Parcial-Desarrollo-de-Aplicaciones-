import "./CommitmentCard.css";

/**
 * CommitmentCard — numbered card used in Presentacion page.
 * @param {number}  number  — Display number (01, 02, 03…)
 * @param {string}  text    — Descriptive body text
 */
export default function CommitmentCard({ number, text }) {
    const label = String(number).padStart(2, "0");
    return (
        <article className="commit-card">
            <span className="commit-card__number">{label}</span>
            <p className="commit-card__text">{text}</p>
        </article>
    );
}
