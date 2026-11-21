function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>⭐ {recipe.rating} | {recipe.cuisine}</p>
      <p>⏱ {recipe.cookTimeMinutes} min</p>
    </div>
  );
}

export default RecipeCard;