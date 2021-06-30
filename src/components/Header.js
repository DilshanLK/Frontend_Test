import React from 'react'

import Logo from '../assets/images/logo-top.png'
import LinkedinIcon from '../assets/images/icon-1.png'
import FacebookIcon from '../assets/images/icon-2.png'
import GoogleIcon from '../assets/images/icon-3.png'
import TwitterIcon from '../assets/images/icon-4.png'
import VIcon from '../assets/images/icon-5.png'
import Search from '../assets/images/magnifying-glass.svg'
import HeaderBackground from '../assets/images/banner.png'

const Header = () => {
  return (
    <div
      class='bg-center'
      style={{ backgroundImage: `url(${HeaderBackground})` }}>
      <div class='container mx-auto z-10 relative'>
        <div class='md:flex md:items-center md:text-left md:justify-between py-8'>
          <div class='flex justify-between w-4/12 text-base gray-700 text-white'>
            <div>Call US</div>
            <div class='text-orange-200'>029292162</div>
            <div>Career</div>
            <div>Support</div>
          </div>
          <div class='w-5/12 mx-auto md:m-0 flex justify-center'>
            <img src={Logo} class='h-10' />
          </div>
          <div class='flex mx-auto md:m-0 justify-between w-3/12'>
            <div>
              <img src={LinkedinIcon} class='h-4' />
            </div>
            <div>
              <img src={FacebookIcon} class='h-4' />
            </div>
            <div>
              <img src={GoogleIcon} class='h-4' />
            </div>
            <div>
              <img src={TwitterIcon} class='h-4' />
            </div>
            <div>
              <img src={VIcon} class='h-4' />
            </div>
            <div>
              <img style={{ color: '#f59019' }} src={Search} class='h-4' />
            </div>
          </div>
        </div>
        <div class='flex justify-between bg-blue-200 py-4'>
          <div class='flex items-center w-6/12 justify-between pl-8 text-white'>
            <div>Home</div>
            <div>Services</div>
            <div>Portfolio</div>
            <div>News</div>
            <div>About</div>
            <div>Contact</div>
          </div>
          <div class='w-6/12 flex  justify-end pr-4'>
            <div class='bg-orange-200 rounded-lg text-white px-8 py-2'>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
        <div class='flex justify-center pt-20'>
          <div class='text-center text-white'>
            <div class='text-base'>Protfolio</div>
            <div class='text-5xl pt-4'>About US</div>
            <div class='w-48 h-1 bg-white mt-4'></div>
          </div>
        </div>
        <div class='flex justify-center pt-20 pb-10'>
          <div class='flex'>
            <div class='text-white'>Home</div>
            <div class='px-2 text-white'>-</div>
            <div class='text-orange-200'>Portfolio</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
