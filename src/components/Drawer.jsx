import React from 'react'
import { AppIcon, CalendarIcon, SesIcon, ContactIcon, TemplateIcon, SettingIcon } from './Icons'
import { Link } from 'react-router-dom'
import menu from '../assets/data/menu.json'

function Drawer() {
    return (
        <div className="fixed left-8 top-8 bottom-8 rounded-3xl z-10  w-16 drawer-group hover:w-64 transition-all duration-200 bg-white  overflow-hidden  hover:drop-shadow-2xl">
            <nav className="flex flex-col h-full py-4 ">
                <div className='h-20  flex items-center '>
                    <img src="./logo.svg" className='w-12 inline-block drawer-group-hover:hidden ml-2' />
                    <img src="./logo-main.svg" className='w-52  hidden drawer-group-hover:inline-block' />
                </div>
                <ul className='flex flex-col space-y-8   items-center drawer-group-hover:items-start mt-16 whitespace-nowrap'>
                    {menu.map((page, key) => {
                        let Icon = CalendarIcon
                        switch (page.path) {
                            case '/':
                                Icon = AppIcon
                                break;
                            case '/smtp':
                                Icon = SettingIcon
                                break;
                            case '/ses':
                                Icon = SesIcon
                                break;
                            case '/templates':
                                Icon = TemplateIcon
                                break;
                            case '/contact':
                                Icon = ContactIcon
                                break;
                            case '/campaigns':
                                Icon = CalendarIcon
                                break;
                            default:
                                Icon = AppIcon
                                break;
                        }
                        return <li key={key}><Link to={page.path}>
                            <div className='icon-group flex '>
                                <div className='m-auto w-16 flex items-center justify-center'>
                                    <Icon />
                                </div>
                                <div><span className="hidden drawer-group-hover:inline-block font-light text-black fadein_anim_menu_item  hover:text-brand-primary">{page.name}</span></div>
                            </div>
                        </Link></li>
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Drawer