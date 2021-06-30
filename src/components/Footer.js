import React from 'react'

import Logo from '../assets/images/logo-bottom.png'
import LinkedinIcon from '../assets/images/icon-1.png'
import FacebookIcon from '../assets/images/icon-2.png'
import GoogleIcon from '../assets/images/icon-3.png'
import TwitterIcon from '../assets/images/icon-4.png'
import VIcon from '../assets/images/icon-5.png'

export const Footer = () => {
  return (
    <div>
      <footer class='footer-1 bg-gray-800 text-white py-8 sm:py-12'>
        <div class='container'>
          <div class='sm:flex sm:flex-wrap sm:-mx-4 md:py-4'>
            <div class='px-4 mt-4 sm:w-full xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto pb-10'>
              <h5 class='text-xl font-bold mb-6 sm:text-center xl:text-left'>
                <div>
                  <img src={Logo} />
                </div>
              </h5>
              <div class='text-xs'>
                &copy; 2018 template. All Rights Reserved.
              </div>
              <div class='flex sm:justify-center xl:justify-start py-8'>
                <div class='w-8 h-8 border mr-4 flex justify-center items-center border-2 border-gray-400  text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600'>
                  <img src={FacebookIcon} class='h-4' />
                </div>
                <div class='w-8 h-8 border mr-4  flex justify-center items-center border-2 border-gray-400 text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600'>
                  <img src={TwitterIcon} class='h-4' />
                </div>
                <div class='w-8 h-8 border mr-4  flex justify-center items-center border-2 border-gray-400 text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600'>
                  <img src={LinkedinIcon} class='h-4' />
                </div>
                <div class='w-8 h-8 border mr-4  flex justify-center items-center border-2 border-gray-400 text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600'>
                  <img src={GoogleIcon} class='h-4' />
                </div>
              </div>
            </div>
            <div class='px-4 sm:w-1/2 md:w-1/4 xl:w-1/6'>
              <h5 class='text-base font-bold mb-6'>ABOUT</h5>
              <ul class='list-none footer-links text-gray-400 text-sm'>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    How it Works
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Gurantee
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Security
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Contact
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Our Story
                  </a>
                </li>
              </ul>
            </div>
            <div class='px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0'>
              <h5 class='text-base font-bold mb-6'>SOLUTION</h5>
              <ul class='list-none footer-links text-gray-400 text-sm'>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Car Loan
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Personal Loan
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Education Loan
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Business Loan
                  </a>
                </li>
              </ul>
            </div>
            <div class='px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0'>
              <h5 class='text-base font-bold mb-6'>NEED HELP?</h5>
              <ul class='list-none footer-links text-gray-400 text-sm'>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Find a branch
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Contact us
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    FAQ
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    APR
                  </a>
                </li>
              </ul>
            </div>
            <div class='px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0'>
              <h5 class='text-base font-bold mb-6'>SAVE & INVEST</h5>
              <ul class='list-none footer-links text-gray-400 text-sm'>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Credit Cards
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Mortgages
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Home Equity
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#'
                    class='border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800'>
                    Lines of Credit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
