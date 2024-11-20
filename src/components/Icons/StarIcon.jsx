import React from 'react'

function StarIcon({ w = '21', h = '21', className = '', color = "black", fill = "black", onClick }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer group " + className} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path className='group-hover:stroke-brand-primary' d="M11.9998 18.9753C13.8658 18.9753 15.7708 21.9943 17.5408 20.6603C19.3108 19.3253 17.2408 16.6433 17.6598 14.7343C18.0788 12.8243 21.4678 12.0693 20.9448 9.84429C20.4228 7.62029 16.6528 9.05329 15.4418 7.80029" stroke={color}stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path className='group-hover:stroke-brand-primary' d="M14.1282 5.16176C13.6542 4.02176 13.0922 2.99976 12.0002 2.99976C9.96418 2.99976 9.77118 6.54676 8.55918 7.79976C7.34718 9.05276 3.57818 7.61976 3.05518 9.84376C2.53218 12.0688 5.92218 12.8238 6.34018 14.7338C6.76118 16.6428 4.68918 19.3248 6.45918 20.6598C7.41218 21.3788 8.40518 20.8348 9.40918 20.1788" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default StarIcon