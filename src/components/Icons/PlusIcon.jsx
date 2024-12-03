import React from 'react'

function PlusIcon({ w = '24', h = '24', className = '', color = "black", fill = "black" }) {
  return (
    <svg width={w} height={h} className={"cursor-pointer group " + className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0369 7.71277C12.4511 7.71277 12.7869 8.04855 12.7869 8.46277V15.6112C12.7869 16.0254 12.4511 16.3612 12.0369 16.3612C11.6227 16.3612 11.2869 16.0254 11.2869 15.6112V8.46277C11.2869 8.04855 11.6227 7.71277 12.0369 7.71277Z" className='group-hover:fill-brand-primary' fill={color} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70886 12.037C7.70886 11.6228 8.04465 11.287 8.45886 11.287H15.6147C16.0289 11.287 16.3647 11.6228 16.3647 12.037C16.3647 12.4512 16.0289 12.787 15.6147 12.787H8.45886C8.04465 12.787 7.70886 12.4512 7.70886 12.037Z" className='group-hover:fill-brand-primary' fill={color} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.96051 4.96063C3.66147 6.25968 3.05005 8.42756 3.05005 12.037C3.05005 15.6465 3.66147 17.8143 4.96051 19.1134C6.25956 20.4124 8.42744 21.0239 12.0369 21.0239C15.6463 21.0239 17.8142 20.4124 19.1133 19.1134C20.4123 17.8143 21.0237 15.6465 21.0237 12.037C21.0237 8.42756 20.4123 6.25968 19.1133 4.96063C17.8142 3.66159 15.6463 3.05017 12.0369 3.05017C8.42744 3.05017 6.25956 3.66159 4.96051 4.96063ZM3.89985 3.89997C5.6437 2.15612 8.34424 1.55017 12.0369 1.55017C15.7295 1.55017 18.4301 2.15612 20.1739 3.89997C21.9178 5.64382 22.5237 8.34436 22.5237 12.037C22.5237 15.7297 21.9178 18.4302 20.1739 20.1741C18.4301 21.9179 15.7295 22.5239 12.0369 22.5239C8.34424 22.5239 5.6437 21.9179 3.89985 20.1741C2.156 18.4302 1.55005 15.7297 1.55005 12.037C1.55005 8.34436 2.156 5.64382 3.89985 3.89997Z" className='group-hover:fill-brand-primary' fill={color} />
    </svg>
  )
}

export default PlusIcon