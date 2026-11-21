import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) throw new Error("Server error: " + res.status);
      const data = await res.json();
      setRecipes(data.recipes);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} onRetry={fetchRecipes} />;
  const filteredRecipes = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Recipes</h1>
      <input
       type="text"
        placeholder="Search recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
        />
      <div className="cards">
        {filteredRecipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
      {filteredRecipes.length === 0 && <p className="empty">No recipes found.</p>}
    </div>
  );
}

export default App;