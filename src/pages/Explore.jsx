import React from 'react'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'></p>
        Explore Properties
        <main> 
          <p className='exploreCategoryHeading'> Categories</p>
          <div className='exploreCategories'>
            <Link to='/category/rent'>
              <img src={rentCategoryImage} alt='rent' className='exploreCategoryImg' />

            </Link>
            <Link to="/category/sale">
              <img src={sellCategoryImage} 
              alt="sell" className='exploreCategoryImg' />
            </Link>
          </div>
</main>
      </header>
    </div>
  )
}

export default Explore
