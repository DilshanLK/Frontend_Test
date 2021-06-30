import React from 'react'

import CardBanner from '../assets/images/gallery.png'

export const FeatureCard = (props) => {
  return (
    <div class='shadow  mx-4'>
      <div>
        <img class='w-full mx-auto' src={CardBanner} />
      </div>
      <div class='text-center hover:bg-blue-200 hover:text-white text-gray-800 px-6 py-10'>
        <div class='pb-8 text-xl text-orange-200 hover:text-white'>
          {props.title}
        </div>
        <div>{props.description}</div>
      </div>
    </div>
  )
}
