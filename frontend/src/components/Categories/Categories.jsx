import './Categories.css'
import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/categories'
import { Link } from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    getCategoriesData();
  }, [])
  
  async function getCategoriesData() {
    const response = await getCategories();
    return setCategories(response);
  }

  function showCategories() {
    if (categories.length < 3) {
      return categories.map((category, index) => {
        return <div key={index} className='category-item'>{category.name}</div>
      })  
    } else if (categories.length > 3) {
      return categories.map((category, index) => {
        if (index < 3) {
          return <div key={index} className='category-item'>{category.name}</div>
        }
      })
    }
    return <div>There are no categories</div>
  }

  return (
    <section className='section__categories'>
      <h2 className="section__h2 josefin-sans-font">Here are some of our categories</h2>
      <div className="categoriesList">
        { showCategories() }
      </div>
      <div className='go-categories'>
        <Link to="/categories"><button className='link-button-cat'>See more</button></Link>
      </div>

    </section>
  );
}

export default Categories