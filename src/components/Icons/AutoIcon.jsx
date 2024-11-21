import React from 'react'
{/* 2975BB */ }
{/* F69F1C */ }

function AutoIcon({ w = '24', h = '24', className = '', isActive = false }) {
    return (
        <svg width={w} height={h} className={"cursor-pointer " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9955 3.08884C14.9955 3.08884 21 2.07671 21 6.88494C21 10.819 17.9977 10.5199 12.8646 10.5199C7.2737 10.5199 3.00006 9.94468 3 14.454C2.99995 18.6872 8.56203 17.951 8.56203 17.951" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path className={`${isActive ? 'stroke-brand-primary' : 'icon-group-hover:stroke-brand-primary'}`}  d="M12.4801 17.387C12.4801 19.1777 13.1106 19.774 15 19.774C16.8894 19.774 17.5199 19.1777 17.5199 17.387C17.5199 15.5963 16.8894 15 15 15M7 4.38701C7 6.1777 7.63043 6.77402 9.51986 6.77402C11.4093 6.77402 12.0397 6.1777 12.0397 4.38701C12.0397 2.59631 11.4093 2 9.51986 2" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default AutoIcon