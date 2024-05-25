import React from 'react'
import './Footer.css'
import { assets } from '../../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Welcome to FoodDelight, your go-to destination for delicious recipes, cooking tips, and culinary inspiration. Join us on a gastronomic journey and discover the joy of cooking!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About-us</li>
                        <li>Delevery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GETTING IN TOUCH</h2>
                    <ul>
                        <li>Phone: +91-123-4567-890</li>
                        <li>Email: info@tadkatale.com</li>
                        <li>Address: 123 Culinary Street, Food City, FL 12345</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">&copy; 2024 Tadka-Tale. All rights reserved.</p>
        </div>
    )
}

export default Footer
