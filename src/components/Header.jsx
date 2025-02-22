import { useNavigate } from 'react-router-dom';

const Header = ({ onOpenAddRecipe }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>Recipes</h1>
      <nav className="nav">
      <button className="Home" onClick={() => navigate('/')}>Home</button>
        <button className="login" onClick={() => navigate('/login')}>Login</button>
        <button className="register" onClick={() => navigate('/register')}>Register</button>
        <button className="add-recipe" onClick={onOpenAddRecipe}>Add New Recipe</button> 
        <button className="saved" onClick={() => navigate('/saved')}>Saved Recipes</button>

      </nav>
    </header>
  );
};

export default Header;
