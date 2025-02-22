import RecipeCard from './RecipeCard';

const RecipeGrid = ({ recipes, onSave }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onSave={onSave} />
      ))}
    </div>
  );
};

export default RecipeGrid;