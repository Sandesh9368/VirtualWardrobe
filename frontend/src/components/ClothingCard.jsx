function ClothingCard({ name, category, season, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>Category: {category}</p>

      <p>Season: {season}</p>
    </div>
  );
}

export default ClothingCard;