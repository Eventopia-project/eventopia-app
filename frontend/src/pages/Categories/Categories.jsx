import React from 'react'
import { useEffect, useState } from 'react'
import { getCategories } from '../../services/categories'
import ShowEvents from '../../components/ShowEvents/ShowEvents'
import './Categories.css'
function Categories() {
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('')

  useEffect(() => {
    getCategoriesData()
  }, [])

  async function getCategoriesData() {
    const response = await getCategories()
    setCategories(response)
  }

  function handleClick(category) {
    setCategory(category);
  }

  function showAllCategories() {
    if (!categories.length) {
      return null;
    }
    return categories.map((category, index) => {
      return <button key={index} onClick={() => handleClick(category.id)}>{category.name}</button>
    })
  }


  return (
    <>
      <div>Categories</div>
      <div className="all-categories">
        {showAllCategories()}
      </div>
      <ShowEvents categoryId={category}/>
    </>
  )
}

export default Categories
