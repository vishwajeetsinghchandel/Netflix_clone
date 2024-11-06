import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='="footer-icons'>
      <img src={youtube_icon} alt=""/>
      <img src={twitter_icon} alt=""/>
      <img src={facebook_icon} alt=""/>
      <img src={instagram_icon} alt=""/>
      </div>
      <ul>
        <li>Audio Descrition</li>
        <li>Help</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relationn</li>
        <li>Carrers</li>
        <li>Term of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookei Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>Netflix India </p>
    </div>
  )
}

export default Footer
