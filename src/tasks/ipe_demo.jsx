import { useState } from 'react';

const vegetableData = {
  fruits: ['Tomato', 'Cucumber', 'Bell Pepper'],
  leafyGreens: ['Spinach', 'Kale', 'Lettuce'],
  rootVegetables: ['Carrot', 'Potato', 'Beetroot'],
  legumes: ['Lentils', 'Chickpeas', 'Black Beans'],
};

const VegetableCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('fruits');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setErrorMessage('');

    if (selectedCategory === 'Select Category') {
      setErrorMessage('Please select a category.');
    } else if (!vegetableData[selectedCategory]) {
      setErrorMessage('Category not found.');
    } else {
      setSelectedCategory(selectedCategory);
    }
  };

  const getDisplayVegetables = () => {
    if (selectedCategory === 'Select Category') {
      return [];
    } else if (!vegetableData[selectedCategory]) {
      return [];
    } else {
      return vegetableData[selectedCategory].slice(0, 3); // Randomly select 3 vegetables
    }
  };

  return (
    <div>
      <h2>Vegetable Categories</h2>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="Select Category">Select Category</option>
        <option value="fruits">Fruits</option>
        <option value="leafyGreens">Leafy Greens</option>
        <option value="rootVegetables">Root Vegetables</option>
        <option value="legumes">Legumes</option>
      </select>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <ul>
        {getDisplayVegetables().map((vegetable, index) => (
          <li key={index}>{vegetable}</li>
        ))}
      </ul>
    </div>
  );
};

export default VegetableCategories;