import React from 'react'
import { twJoin } from 'tailwind-merge'
import { DirectionIcon } from './Icons'

function Button({ className = 'text-white', onClick = _ => null, name = 'Submit', iconRight = null, iconLeft = null }) {
    return (
        <div
            className={twJoin(`cursor-pointer p-2 px-6 flex items-center justify-center bg-gradient-to-r from-brand-primary to-brand-primaryDark hover:from-45% from-65% w-fit rounded-full transition-all duration-700 font-medium`, className)}
            onClick={onClick}
        >
            {iconLeft?.()}<p>{name}</p>{iconRight?.()}
        </div>
    )
}

export default Button


