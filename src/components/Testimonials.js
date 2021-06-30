import React from 'react'
import { TestimonialsCard } from './TestimonialsCard'

export const Testimonials = () => {
  return (
    <div class='py-6 mx-auto'>
      <div class='flex justify-center'>
        <div class='text-center flex flex-col justify-center'>
          <div>
            <div class='text-orange-200 text-xl'>Words From Customer</div>
            <div class='text-blue-200 pt-2 text-xl'>Testimonial</div>
          </div>
          <div class='w-8 h-1 bg-orange-200 mx-auto mt-4'></div>
        </div>
      </div>
      <div class='flex py-12'>
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </div>
  )
}
