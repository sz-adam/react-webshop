import React from 'react'
import '../styles/Category.css'

export default function Category({ categories, selectedCategory, handleCategoryClick }) {
  return (
    <div className='categoryContainer'>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          style={{ marginRight: '8px' }}
          className={selectedCategory === category ? 'active' : ''}
        >
          {category === "all" ? "All" : category}
        </button>
      ))}
    </div>
  );
}
