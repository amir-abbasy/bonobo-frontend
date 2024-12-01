import React from 'react'

export default function HeroCard() {
  return (
    <div className='hidden sm:flex flex-1 bg-[#f9f9f9]  h-full flex-col'>
      <img src="./logo-main.svg" className="w-44 m-8" alt="" />
      <img src="./LoginPageIllustration.png" className="xl:max-w-[700px] mx-auto" alt="" />
      <div className='text-center px-4'>
        <h4 className='text-2xl font-semibold my-2'>Moving closer to sustainable growth</h4>
        <p>Create impactful campaigns with ease, track their performance in detail, </p>
        <p>and transform your leads into loyal, high-value customers</p>
      </div>
    </div>
  )
}
