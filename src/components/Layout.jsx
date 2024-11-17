import React from 'react'
import Drawer from './Drawer'
import { twMerge } from 'tailwind-merge'

function Layout({ children, className }) {
    return (
        <div className={twMerge(`px-48 pb-12 min-h-screen bg-brand-background ${className}`)}>
            <Drawer />
            {children}
        </div>
    )
}

export default Layout