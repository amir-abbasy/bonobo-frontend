import React from 'react'
{/* 2975BB */ }
{/* F69F1C */ }

function TemplateIcon({ w = '24', h = '24', className = '', color = "black", isActive = false }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <path d="M15 7.5C15 8.88065 13.8803 10 12.5 10C11.119 10 10 8.88065 10 7.5C10 6.11935 11.119 5 12.5 5C13.0016 5 13.4692 5.14834 13.8606 5.40283M10.524 19.234C3.381 19.234 1 16.954 1 10.117C1 3.279 3.381 1 10.524 1C17.667 1 20.048 3.279 20.048 10.117C20.048 15.495 18.575 18.053 14.471 18.9M10 12.496C10 11.82 6.6738 9.6576 6.29648 10.0464C5.91989 10.4352 5.88289 14.52 6.29648 14.9455C6.71081 15.3724 10 13.1719 10 12.496Z"
       strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> */}
      <path stroke="black" className={isActive ? 'stroke-brand-primary' : color ?? 'icon-group-hover:stroke-brand-primary'} d="M6.0708 16.4589C6.0708 16.4589 6.8828 14.8219 8.0648 14.8219C9.2468 14.8219 9.8508 16.1969 11.1608 16.1969C12.4698 16.1969 13.9388 12.7489 15.4228 12.7489C16.9048 12.7489 17.9708 15.1399 17.9708 15.1399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path className={isActive ? 'stroke-brand-primary' : color ?? 'icon-group-hover:stroke-brand-primary'} d="M10.1389 9.10487C10.1389 9.96487 9.44193 10.6629 8.58093 10.6629C7.72093 10.6629 7.02393 9.96487 7.02393 9.10487C7.02393 8.24487 7.72093 7.54688 8.58093 7.54688" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path stroke="black" className={'icon-group-hover:stroke-brand-primary'} d="M15.531 20.9721C19.747 20.1791 21.25 17.5921 21.25 12.0001C21.25 5.06312 18.937 2.75012 12 2.75012C5.063 2.75012 2.75 5.06312 2.75 12.0001C2.75 18.9371 5.063 21.2501 12 21.2501" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default TemplateIcon