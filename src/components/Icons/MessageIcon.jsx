import React from 'react'

function MessageIcon({ w = '24', h = '24', className = '', color = "black" }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.569 9.05054C17.569 9.05054 14.359 12.9035 12.011 12.9035C9.66397 12.9035 6.41797 9.05054 6.41797 9.05054" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.0001 21.1171C4.85707 21.1171 2.47607 18.8371 2.47607 12.0001C2.47607 5.16206 4.85707 2.88306 12.0001 2.88306C19.1431 2.88306 21.5241 5.16206 21.5241 12.0001C21.5241 17.3781 20.0511 19.9361 15.9471 20.7831" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default MessageIcon