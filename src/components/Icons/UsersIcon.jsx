import React from 'react'

function ArrawIcon({ w = '24', h = '24', className = '', color = "black", fill = "black", isActive = false }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.55851 21.278C4.35651 20.978 2.80151 20.24 2.80151 18.674C2.80151 16.45 5.91851 14.446 9.61051 14.446C13.2825 14.446 16.4185 16.431 16.4185 18.654C16.4185 20.877 13.3025 21.453 9.61051 21.453" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.56488 3.78524C5.75188 4.57824 5.24588 5.68524 5.24588 6.91124C5.23688 9.31324 7.17788 11.2672 9.57888 11.2752H9.60988C12.0199 11.2752 13.9739 9.32124 13.9739 6.91124C13.9739 4.50124 12.0199 2.54724 9.60988 2.54724" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path className={isActive ? 'stroke-brand-primary' : color ?? 'icon-group-hover:stroke-brand-primary'} d="M16.8523 10.0757C18.2553 9.70071 19.2893 8.42171 19.2893 6.89971C19.2903 5.31171 18.1633 3.98571 16.6653 3.67871" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path className={color ?? 'icon-group-hover:stroke-brand-primary'} d="M17.5125 13.6508C19.5005 13.6508 21.1985 14.9988 21.1985 16.2018C21.1985 16.9108 20.6135 17.6388 19.7235 17.8478" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ArrawIcon