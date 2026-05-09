import "./LearningCard.css";

/**
 * LearningCard — image + title + description card used in Favoritos.
 * @param {string} image  — URL or import path for the image
 * @param {string} title  — Card heading
 * @param {string} desc   — Short description
 * @param {string} alt    — Image alt text (defaults to title)
 */
export default function LearningCard({ image, title, desc, alt }) {
    return (
        <article className="learn-card">
            <div className="learn-card__img-wrap">
                <img
                    src={image}
                    alt={alt || title}
                    className="learn-card__img"
                />
            </div>
            <div className="learn-card__body">
                <h3 className="learn-card__title">{title}</h3>
                <p className="learn-card__desc">{desc}</p>
            </div>
        </article>
    );
}
