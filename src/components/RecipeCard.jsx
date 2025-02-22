import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe, onSave }) => {
  const navigate = useNavigate();
  
  console.log("Recipe Data:", recipe); // Debugging

  return (
    <div className="recipe-card">
      <img src={recipe.image || "https://via.placeholder.com/150"} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button className="save" onClick={() => onSave(recipe)}>Save</button>
      <button className="view-more" onClick={() => navigate(`/recipe/${recipe.id}`)}>
        View More
      </button>
    </div>
  );
};

export default RecipeCard;
