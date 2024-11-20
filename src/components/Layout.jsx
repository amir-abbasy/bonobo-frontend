import React from 'react'
import Drawer from './Drawer'
import { twMerge } from 'tailwind-merge'

function Layout({ children, className }) {
    return (
        <div className={twMerge(`mt-20 sm:mt-0 md:px-32 xl:px-48 pb-12 min-h-screen bg-brand-background ${className}`)}>
            <Drawer />
            {children}
        </div>
    )
}

export default Layout