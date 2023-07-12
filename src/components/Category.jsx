import React from 'react'
import '../styles/Category.css'

export default function Category({ categories, selectedCategory, handleCategoryClick }) {
  return (
    <div className='categoryContainer'>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={selectedCategory === category ? 'active' : 'buttonCategory'}
        >
          {category === "all" ? "All" : category}
        </button>
      ))}
    </div>
  );
}
