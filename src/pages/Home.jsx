import RecipeGrid from '../components/RecipeGrid';

const Home = ({ recipes, onSave }) => {
  return <RecipeGrid recipes={recipes} onSave={onSave} />;
};

export default Home;