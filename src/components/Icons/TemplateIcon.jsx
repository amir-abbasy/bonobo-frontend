import React from 'react'
{/* 2975BB */ }
{/* F69F1C */ }

function TemplateIcon({ w = '24', h = '24', className = '' }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 7.5C15 8.88065 13.8803 10 12.5 10C11.119 10 10 8.88065 10 7.5C10 6.11935 11.119 5 12.5 5C13.0016 5 13.4692 5.14834 13.8606 5.40283M10.524 19.234C3.381 19.234 1 16.954 1 10.117C1 3.279 3.381 1 10.524 1C17.667 1 20.048 3.279 20.048 10.117C20.048 15.495 18.575 18.053 14.471 18.9M10 12.496C10 11.82 6.6738 9.6576 6.29648 10.0464C5.91989 10.4352 5.88289 14.52 6.29648 14.9455C6.71081 15.3724 10 13.1719 10 12.496Z"
        stroke="black" className='icon-group-hover:stroke-brand-primary' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    </svg>
  )
}

export default TemplateIcon