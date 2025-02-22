import RecipeGrid from '../components/RecipeGrid';

const SavedRecipes = ({ savedRecipes }) => {
    return (
      <div className="saved-recipes">
        <h2>Saved Recipes</h2>
        {savedRecipes.length === 0 ? (
          <p>No saved recipes yet.</p>
        ) : (
          <RecipeGrid recipes={savedRecipes} onSave={() => {}} />
        )}
      </div>
    );
};

export default SavedRecipes;
