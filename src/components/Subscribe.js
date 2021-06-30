import React from 'react'
import Arrow from '../assets/images/right_arrow.png'

export const Subscribe = () => {
  return (
    <div class='py-12'>
      <div class='p-10 md:flex items-center justify-center text-center'>
        <div class='md:mb-0 mb-5 text-2xl w-1/2 text-right'>
          Subscribe our newsletter!
        </div>
        <div class='text-left pl-6 w-1/2'>
          <div class='flex items-center'>
            <input
              class='outline-none shadow-lg px-4 w-2/3 text-left py-4 rounded-br-3xl'
              type='text'
              placeholder='Enter email address'
            />
            <img src={Arrow} class='h-4 -ml-8' />
          </div>
        </div>
      </div>
    </div>
  )
}
