import React from 'react'
import { twJoin } from 'tailwind-merge'

function Button({ className = 'text-white', onClick = _ => null, name = 'Submit' }) {
    return (
        <div
            className={twJoin(`cursor-pointer p-2 px-6 flex items-center justify-center bg-gradient-to-r from-brand-primary to-brand-primaryDark hover:from-45% from-65% w-fit rounded-full transition-all duration-700 font-medium`, className)}
            onClick={onClick}
        >
            <p>{name}</p>
        </div>
    )
}

export default Button


