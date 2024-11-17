import React from 'react'

function CallIcon({ w = '24', h = '24', className = '', color = "black" }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.19994 15.7989C1.30294 8.89994 2.28294 5.74094 3.01094 4.72294C3.10394 4.55894 5.40594 1.11194 7.87494 3.13394C14.0009 8.17994 6.24494 7.46594 11.3889 12.6109C16.5349 17.7559 15.8209 9.99994 20.8659 16.1249C22.8879 18.5939 19.4409 20.8969 19.2779 20.9889C18.3869 21.6259 15.8559 22.4569 10.6149 18.0329"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default CallIcon