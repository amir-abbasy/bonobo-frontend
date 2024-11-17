import React from 'react'
import { twJoin } from 'tailwind-merge'

function Button({ className, onClick = _ => null, name = 'Submit' }) {
    return (
        <div
            className={twJoin(`button-primary ${className}`)}
            onClick={onClick}
        >
            <p>{name}</p>
        </div>
    )
}

export default Button


