import React from 'react'
function FilterIcon({ w = '24', h = '24', className = '' }) {
    return (
        <svg width={w} height={h} className={"cursor-pointer icon-group " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='icon-group-hover:stroke-brand-primary' d="M16.445 3.06116C19.56 3.22716 21 3.83916 21 6.10116C21 9.82716 14.017 12.2052 14.017 15.6002C14.017 18.9942 14.014 21.0002 12.004 21.0002C9.992 21.0002 9.984 18.9942 9.984 15.6002C9.984 12.2052 3 9.82716 3 6.10116C3 2.95316 5.79 3.00016 11.999 3.00016" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export default FilterIcon