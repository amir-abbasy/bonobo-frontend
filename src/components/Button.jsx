import React from 'react'
import { twJoin } from 'tailwind-merge'
import Spinner from './Spinner'

function Button({ className = 'text-white', onClick = _ => null, name = 'Submit', iconRight = null, iconLeft = null, loading = false, ref = null, type = 'submit' }) {
    return (
        <button
            className={twJoin(`cursor-pointer min-w-32 p-2 px-6 flex items-center justify-center bg-gradient-to-r from-brand-primary to-brand-primaryDark hover:from-45% from-65% w-fit rounded-full transition-all duration-700 font-medium`, className)}
            onClick={onClick}
            ref={ref}
            type={type}
        >
            {loading ? <Spinner w={20} h={20} /> : <>
                {iconLeft?.()}<p>{name}</p>{iconRight?.()}
            </>}
        </button>
    )
}

export default Button


