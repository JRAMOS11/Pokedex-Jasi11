// src/components/Pokedex/Card.jsx

export const Card = ({ id, name, defaultImgUri }) => {
  return (
    <article className="pokemon-card">
      <div className="pokemon-image">
        <img src={defaultImgUri} alt={name} loading="lazy" />
      </div>
      <p className="pokemon-name">{name}</p>
    </article>
  );
};