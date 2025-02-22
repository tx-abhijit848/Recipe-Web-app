import { useState } from "react";
import "../App.css"; // Ensure this file exists and is correctly imported

const AddRecipeForm = ({ isOpen, onClose, onAddRecipe }) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  if (!isOpen) return null; // Prevent rendering when closed

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(formData);
    setFormData({ title: "", image: "", description: "", ingredients: "", instructions: "" });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal card">
        <h2 className="form-title">Add New Recipe</h2>
        <form onSubmit={handleSubmit} className="recipe-form">
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required className="input-field" placeholder="Enter recipe title" />

          <label>Image URL:</label>
          <input type="url" name="image" value={formData.image} onChange={handleChange} required className="input-field" placeholder="Enter image URL" />

          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required className="textarea-field" placeholder="Enter recipe description" />

          <label>Ingredients:</label>
          <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} required className="textarea-field" placeholder="List ingredients separated by commas" />

          <label>Instructions:</label>
          <textarea name="instructions" value={formData.instructions} onChange={handleChange} required className="textarea-field" placeholder="Enter step-by-step instructions" />

          <div className="form-buttons">
            <button type="submit" className="submit-btn">Add Recipe</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
