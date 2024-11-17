import React from 'react'
{/* 2975BB */ }
{/* F69F1C */ }

function ContactIcon({ w = '24', h = '24', className = '' }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='icon-group-hover:stroke-brand-primary' d="M14.2611 15.4501H8.86108" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path className='icon-group-hover:stroke-brand-primary' d="M12.2159 11.4387H8.85986" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path  d="M11.995 21.2501C18.295 21.2501 20.395 18.9401 20.395 12.0001C20.395 10.5801 20.305 9.35012 20.115 8.30012L14.445 2.90012C13.715 2.80012 12.895 2.75012 11.995 2.75012C5.70498 2.75012 3.60498 5.07012 3.60498 12.0001C3.60498 17.8631 5.10398 20.4221 9.36198 21.0751" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path className='icon-group-hover:stroke-brand-primary' d="M13.8889 5.4939C13.8889 7.3519 15.3949 8.8569 17.2529 8.8569H20.2039" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ContactIcon