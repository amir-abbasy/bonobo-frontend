import React, { useState } from 'react'
import { AppIcon, CalendarIcon, UsersIcon, ContactIcon, TemplateIcon, SettingIcon, CampaignIcon, AutoIcon, ResponderIcon } from './Icons'
import { Link } from 'react-router-dom'
import menu from '../assets/data/menu.json'
import footermenu from '../assets/data/footermenu.json'

function Drawer() {
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
    const [isOpenSubMenu2, setIsOpenSubMenu2] = useState(false);
    const [activeMenu, setActiveMenu] = useState();

    return (
        <div className="md:block sm:fixed left-8 top-8 bottom-8 rounded-3xl z-10  sm:w-16 drawer-group sm:hover:w-64 transition-all duration-200 bg-white  overflow-hidden  hover:drop-shadow-2xl">
            <nav className="flex flex-col h-full py-4 ">
                <div className='h-20  flex items-center '>
                    <img src="./logo.svg" className='hidden w-12 sm:inline-block drawer-group-hover:hidden ml-2' />
                    <img src="./logo-main.svg" className='w-52  sm:hidden drawer-group-hover:inline-block' />
                </div>
                <ul className='flex flex-col space-y-8 items-start mt-16 whitespace-nowrap'>
                    {menu.map((page, key) => {
                        let hasSubmenu = page?.submneu
                        let Icon = CalendarIcon
                        switch (page.path) {
                            case '/':
                                Icon = AppIcon
                                break;
                            case '/autoresponder':
                                Icon = ResponderIcon
                                break;
                            case '/automation':
                                Icon = AutoIcon
                                break;
                            case '/templates':
                                Icon = TemplateIcon
                                break;
                            case '/audience':
                                Icon = UsersIcon
                                break;
                            case '/campaigns':
                                Icon = CampaignIcon
                                break;
                            default:
                                Icon = AppIcon
                                break;
                        }
                        return <li key={key}
                            onClick={() => {
                                if (!hasSubmenu) {
                                    setIsOpenSubMenu(!isOpenSubMenu)
                                    return
                                }
                                setIsOpenSubMenu(!isOpenSubMenu)
                                setActiveMenu(page.name)
                            }}
                        ><Link to={hasSubmenu ? null : page.path}>
                                <div className='icon-group flex '>
                                    <div className='flex justify-center w-16'>
                                        <Icon />
                                    </div>
                                    <div className=''><span className={`sm:hidden drawer-group-hover:inline-block font-normal text-black fadein_anim_menu_item  hover:text-brand-primary ${activeMenu == page.name ? 'text-brand-primary' : ''}`}>{page.name}</span>

                                        {hasSubmenu && isOpenSubMenu && <ul className={`sm:hidden drawer-group-hover:flex flex-col  ${isOpenSubMenu ? 'h-full' : 'h-0'} overflow-clip transition-all duration-200`}>
                                            {page.submneu.map((menu, key) => {
                                                return <li >
                                                    <Link to={menu.path}> <p className='text-gray-700 hover:text-brand-primary font-normal mt-4'> {menu.name}</p></Link>
                                                </li>
                                            })}
                                        </ul>}
                                    </div>
                                </div>

                            </Link></li>
                    })}
                </ul>




                {/* FOOTER */}
                <ul className='flex flex-col space-y-8   sm:items-center drawer-group-hover:items-start mt-16 whitespace-nowrap sm:mt-auto'>
                    {footermenu.slice(0, 2).map((page, key) => {
                        let hasSubmenu = page?.submneu
                        let Icon = CalendarIcon
                        switch (page.path) {
                            case '/configuration':
                                Icon = SettingIcon
                                break;
                            default:
                                Icon = UsersIcon
                                break;
                        }
                        return <li key={key}
                            onClick={() => {
                                if (!hasSubmenu) {
                                    setIsOpenSubMenu2(!isOpenSubMenu2)
                                    return
                                }
                                setIsOpenSubMenu2(!isOpenSubMenu2)
                                setActiveMenu(page.name)
                            }}
                        ><Link to={hasSubmenu ? null : page.path}>
                                <div className='icon-group flex '>
                                    <div className='flex justify-center w-16'>
                                        <Icon />
                                    </div>
                                    <div className=''><span className={`sm:hidden drawer-group-hover:inline-block font-normal text-black fadein_anim_menu_item  hover:text-brand-primary ${activeMenu == page.name ? 'text-brand-primary' : ''}`}>{page.name}</span>
                                    </div>
                                </div>
                            </Link></li>
                    })}
                </ul>

            </nav>
        </div>
    )
}

export default Drawer