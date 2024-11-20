import React from 'react'

function CloseIcon({ w = '21', h = '21', className = '', color = "black", fill = "black", onClick }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer group " + className} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path className='group-hover:stroke-brand-primary' d="M10 11L1 20M20 1L13 8M1 1L20 20" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default CloseIcon