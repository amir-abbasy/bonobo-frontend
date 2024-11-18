import React from 'react'
function FilterIcon({ w = '24', h = '24', className = '' }) {
    return (
        <svg width={w} height={h} className={"cursor-pointer icon-group hover:fill-brand-primary" + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8244 11.2638C19.8244 15.9928 15.9914 19.8248 11.2634 19.8248C6.53439 19.8248 2.70239 15.9928 2.70239 11.2638C2.70239 6.53476 6.53439 2.70276 11.2634 2.70276C14.3934 2.70276 17.1314 4.38276 18.6244 6.88976" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.4756 19.8864C18.4756 19.1084 19.1076 18.4764 19.8866 18.4764C20.6666 18.4764 21.2976 19.1084 21.2976 19.8864C21.2976 20.6664 20.6666 21.2974 19.8866 21.2974" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export default FilterIcon