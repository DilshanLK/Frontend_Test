import React from 'react'

import Logo from '../assets/images/logo-top.png'
import LinkedinIcon from '../assets/images/icon-1.png'
import FacebookIcon from '../assets/images/icon-2.png'
import GoogleIcon from '../assets/images/icon-3.png'
import TwitterIcon from '../assets/images/icon-4.png'
import VIcon from '../assets/images/icon-5.png'
import Search from '../assets/images/magnifying-glass.svg'
import HeaderBackground from '../assets/images/banner.png'
import './Header.css'

const Header = () => {
  return (
    <div
      className='bg-center'
      style={{
        backgroundImage: `url(${HeaderBackground})`,
        backgroundRepeat: 'no-repeat',
      }}>
      <div className='container mx-auto z-10 relative pt-10'>
        <div className='md:flex md:items-center md:text-left md:justify-between'>
          <div className='flex items-center w-4/12 text-base gray-700 text-white'>
            <div className='header_menu'>Call US</div>
            <div className='header_menu_mobile'>029292162</div>
            <div className='header_menu'>Career</div>
            <div>Support</div>
          </div>
          <div className='w-4/12 mx-auto md:m-0 flex justify-center'>
            <img src={Logo} className='header_logo' />
          </div>
          <div className='flex justify-end w-4/12'>
            <div>
              <img src={LinkedinIcon} className='social_media_icons' />
            </div>
            <div>
              <img src={FacebookIcon} className='social_media_icons' />
            </div>
            <div>
              <img src={GoogleIcon} className='social_media_icons' />
            </div>
            <div>
              <img src={TwitterIcon} className='social_media_icons' />
            </div>
            <div>
              <img src={VIcon} className='social_media_icons' />
            </div>
            <div>
              <img src={Search} className='search_icon' />
            </div>
          </div>
        </div>
        <div className='flex justify-between bg-blue-200 nav_menu_box'>
          <div className='flex nav_menu items-center w-6/12 pl-8 text-white'>
            <div className='nav_menu_button'>Home</div>
            <div className='nav_menu_button'>Services</div>
            <div className='nav_menu_button'>Portfolio</div>
            <div className='nav_menu_button'>News</div>
            <div className='nav_menu_button'>About</div>
            <div className='nav_menu_button'>Contact</div>
          </div>
          <div className='w-6/12 flex justify-end items-center pr-4'>
            <div className='bg-orange-200 flex justify-center rounded-lg text-white apply_button'>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='text-center text-white'>
            <div className='portfolio_text'>Protfolio</div>
            <div className='about_us_text'>About Us</div>
            <div className='divider_line'></div>
          </div>
        </div>
        <div className='flex justify-center tab_menu pb-10'>
          <div className='flex'>
            <div className='text-white tab_menu_button'>Home</div>
            <div className='px-2 text-white tab_menu_button'>-</div>
            <div className='text-orange-200 tab_menu_button'>Portfolio</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
