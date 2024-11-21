import React from 'react'
{/* 2975BB */ }
{/* F69F1C */ }

function ResponderIcon({ w = '24', h = '24', className = '', isActive = false }) {
    return (
        <svg width={w} height={h} className={"cursor-pointer " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9391 12.413H15.9481" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9301 12.413H11.9391" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.92104 12.413H7.93004" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path className={`${isActive ? 'stroke-brand-primary' : 'icon-group-hover:stroke-brand-primary'}`} d="M19.071 4.92704C22.98 8.83604 22.972 15.168 19.071 19.07C16.016 22.126 11.49 22.787 7.78605 21.074C7.24005 20.854 3.70105 21.834 2.93305 21.067C2.16605 20.299 3.14605 16.76 2.92605 16.213C1.21305 12.51 1.87405 7.98304 4.93005 4.92704C7.85605 2.00004 12.153 1.26804 15.764 2.73204" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ResponderIcon