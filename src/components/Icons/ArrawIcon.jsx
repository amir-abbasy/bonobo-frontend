import React from 'react'

function ArrawIcon({ w = '24', h = '24', className = '', color = "black", fill = "black" }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer group " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.75 5L15.75 12L8.75 19" className=' group-hover:stroke-brand-primary' stroke={color} strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

export default ArrawIcon