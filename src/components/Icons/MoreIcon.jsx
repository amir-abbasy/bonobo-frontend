import React from 'react'

function MoreIcon({ w = '24', h = '24', className = '', color = "black" }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer group " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.2501C5.063 21.2501 2.75 18.9371 2.75 12.0001C2.75 5.06312 5.063 2.75012 12 2.75012C18.937 2.75012 21.25 5.06312 21.25 12.0001C21.25 17.5061 19.793 20.0991 15.724 20.9341" className='stroke-none' strokeWidth="1.5" strokeLinecap="round" strokLinejoin="round" />
      <path d="M15.994 12H16.003" className='stroke-black group-hover:stroke-brand-primary' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11.995 12H12.004" className='stroke-black group-hover:stroke-brand-primary' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.99501 12H8.00401" className='stroke-black group-hover:stroke-brand-primary' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default MoreIcon