import React from 'react'

function AppIcon({ w = '24', h = '24', className = '', onClick = _ => null, isActive = false }) {

  return (
    <svg width={w} height={h} className={"cursor-pointer " + className} viewBox="0 0 24 24" fill="none" onClick={onClick} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.0001 6.70647C21.0001 8.73547 19.3551 10.3805 17.3271 10.3805C15.2981 10.3805 13.6541 8.73547 13.6541 6.70647C13.6541 4.67747 15.2981 3.03247 17.3271 3.03247C18.0641 3.03247 18.7511 3.25047 19.3261 3.62447"
        stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        className={`${isActive ? 'stroke-brand-primary' : 'icon-group-hover:stroke-brand-primary'}`}
        fillRule="evenodd" clipRule="evenodd" d="M10.347 6.70647C10.347 8.73547 8.702 10.3805 6.673 10.3805C4.645 10.3805 3 8.73547 3 6.70647C3 4.67747 4.645 3.03247 6.673 3.03247C8.702 3.03247 10.347 4.67747 10.347 6.70647Z"
        stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        className={`${isActive ? 'stroke-brand-primary' : 'icon-group-hover:stroke-brand-primary'}`}
        fillRule="evenodd" clipRule="evenodd" d="M21.0001 17.2947C21.0001 19.3237 19.3551 20.9677 17.3271 20.9677C15.2981 20.9677 13.6541 19.3237 13.6541 17.2947C13.6541 15.2657 15.2981 13.6207 17.3271 13.6207C19.3551 13.6207 21.0001 15.2657 21.0001 17.2947Z"
        stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        // className='icon-group-hover:stroke-[#F69F1C]'
        d="M3.484 19.1178C3.176 18.5808 3 17.9578 3 17.2948C3 15.2658 4.645 13.6208 6.673 13.6208C8.702 13.6208 10.347 15.2658 10.347 17.2948C10.347 19.3228 8.702 20.9678 6.673 20.9678"
        stroke="black"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default AppIcon