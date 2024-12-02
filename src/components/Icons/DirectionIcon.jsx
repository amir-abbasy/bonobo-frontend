import React from 'react'

function DirectionIcon({ w = '24', h = '24', className = '', color = "black", fill = "black" }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer group " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8624 6.96017C14.4094 6.77217 13.9264 6.60617 13.4964 6.60617C13.1874 6.60617 12.9064 6.69117 12.6834 6.91517C12.2198 7.38058 11.9627 9.23922 11.9121 11.25L3.69526 11.25C3.28126 11.25 2.94526 11.586 2.94526 12C2.94526 12.414 3.28126 12.75 3.69526 12.75L11.9125 12.75C11.9639 14.7565 12.2212 16.609 12.6844 17.0732C13.2484 17.6362 14.1814 17.3492 14.9344 17.0392C16.5074 16.3882 21.0544 13.6412 21.0544 11.9932C21.0544 10.2922 16.3044 7.55717 14.8624 6.96017ZM13.6844 8.12517C14.9804 8.36517 19.0474 11.0362 19.5334 11.9952C19.0494 12.9912 14.9814 15.6862 13.7084 15.8842C13.2954 14.6302 13.3024 9.32717 13.6844 8.12517Z" className='group-hover:fill-brand-primary' fill={color} />
    </svg>
  )
}

export default DirectionIcon