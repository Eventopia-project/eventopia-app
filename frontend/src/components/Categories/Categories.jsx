import './Categories.css'
import React, { useState } from 'react';

function Categories() {
  const [categories, setCategories] = useState(['Category 1', 'Category 2', 'Category 3','Más categorías']);

  return (
    <section className='section__categories'>
      {categories.map((category, index) => (
        <div key={index}>{category}</div>
      ))}
    </section>
  );
}

export default Categories;