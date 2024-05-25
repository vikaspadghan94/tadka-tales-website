import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your favourite food here!</h2>
        <p>Welcome to <span>TadkaFlavorTales</span>, your ultimate destination for delicious recipes, cooking tips, and culinary inspiration! Whether you're a seasoned chef or a kitchen novice, our site offers a diverse range of easy-to-follow recipes, from hearty mains to delectable desserts.Join our community to explore global cuisines, discover health-conscious meals</p>
        <button>View Menu <img src="menu.png" alt="" /></button>
        
      </div>
    </div>
  )
}

export default Header
