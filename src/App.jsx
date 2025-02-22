import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetails from './pages/RecipeDetails';
import SavedRecipes from './pages/SavedRecipes';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false); 

  const handleSaveRecipe = (recipe) => {
    console.log("Saving Recipe:", recipe);
    setSavedRecipes((prevRecipes) => {
      // Avoid duplicates
      if (prevRecipes.some((r) => r.id === recipe.id)) return prevRecipes;
      return [...prevRecipes, recipe];
    });
  };
  

  const recipes = [
    { id: 1, title: 'Pasta', image: 'https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg', description: 'Delicious pasta recipe.',ingredients:'' ,instructions:'' },
    { id: 2, title: 'Pizza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Aqy7kjjQbxmABSduzIg3uyh_TOOS0_GPGA&s', description: 'Classic pizza recipe.',ingredients:'' ,instructions:'' },
    { id: 3, title: 'Burger', image: 'https://www.wholesomeyum.com/wp-content/uploads/2023/06/wholesomeyum-Best-Burger-Recipe-12.jpg', description: 'Juicy burger recipe.',ingredients:'' ,instructions:'' },
    { id: 4, title: 'Biriany', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg', description: 'Juicy Chicken Biriany recipe.',ingredients:'Basmati Rice,Chicken,Whole Spices - shahi jeera, bay leaves, star anise, cloves, and green cardamom pods,Ground Spices - turmeric, Kashmiri red chili powder, Biryani Masala. Garam masala,Onion,Ghee  ' ,instructions:"Marinate the Chicken Make the marinade by mixing yogurt, ginger, garlic, turmeric, red chili powder, garam masala, salt, mint leaves, and lemon juice.Add chicken and coat evenly with the marinade. Keep in the refrigerator for at least 30 minutes. You can marinate the chicken overnight too.While the chicken is marinating, rinse and drain the rice 2 to 3 times, then soak in water for 20 minutes. On medium heat, fry the onions stirring frequently until they start to turn golden brown - about 15 to 20 minutes. Remove the fried onions from the pan, leaving the excess ghee behind as we will use this pan to cook the chicken In a medium pot add 8 cups of water. Add cumin seeds, bay leaves, star anise, cardamom, cloves, and salt to the rice and bring the to a boil on high heat.Drain the soaked rice and add it to the boiling water. Bring the rice to a full boil on high heat. Lower the heat to medium and cook uncovered for 5 to 6 minutes or until the rice is about 90% cooked. Drain the rice promptly and reserve. " },
  ];

  return (
    <Router>
      <Header onOpenAddRecipe={() => setModalOpen(true)} /> 
      <Routes>
        <Route path="/" element={<Home recipes={recipes} onSave={handleSaveRecipe} />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/saved" element={<SavedRecipes savedRecipes={savedRecipes} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      {isModalOpen && <AddRecipeForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddRecipe={handleSaveRecipe} />}
    </Router>
  );
};

export default App;
