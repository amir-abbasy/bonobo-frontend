import React, { useState } from 'react'
import { AppIcon, CalendarIcon, UsersIcon, CloseIcon, TemplateIcon, SettingIcon, CampaignIcon, AutoIcon, ResponderIcon } from './Icons'
import { Link } from 'react-router-dom'
import menu from '../assets/data/menu.json'
import footermenu from '../assets/data/footermenu.json'
import configmenu from '../assets/data/configmenu.json'
import { useStore } from '../utils/store'

const primary = '#4579ff'


const getIcon = (path) => {
    let Icon = AppIcon

    switch (path) {
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
        case '/configuration':
            Icon = SettingIcon
            break;
        case '/profile':
            Icon = UsersIcon
            break;

        default:
            Icon = AppIcon
            break;
    }

    return Icon
}

function Drawer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
    const [isOpenSubMenu2, setIsOpenSubMenu2] = useState(false);
    const [configMenu, setConfigMenu] = useState();

    const { activeMenu, swichMenu } = useStore()

    const user = {
        name: "Maadan"
    }

    return (
        <>
            <div className='fixed top-0 left-0  flex items-center justify-between border backdrop-blur-lg w-full z-50 '>
                <img src="./logo-main.svg" className={`w-52 sm:hidden drawer-group-hover:inline-block`} />
                {isOpen ? <CloseIcon className='sm:hidden mr-6' onClick={() => setIsOpen(!isOpen)} /> : <AppIcon className='sm:hidden mr-6' w={30} h={30} onClick={() => setIsOpen(true)} />}
            </div>

            <div className={`${isOpen ? 'mt-16' : 'hidden'} sm:block fixed left-0 top-0 bottom-0 sm:left-8 sm:top-8 sm:bottom-8 sm:rounded-3xl z-10 bg-white/90 sm:hover:bg-white/50  drawer-group  w-full   ${configMenu ? 'sm:w-64 bg-white/50 drop-shadow-2xl ' : 'sm:w-16 sm:hover:w-64'} transition-all duration-200 backdrop-blur-lg overflow-hidden hover:drop-shadow-2xl border border-brand-background`}>
                <nav className="flex flex-col h-full py-4 ">
                    <div className='hidden h-20 sm:flex items-center justify-between '>
                        <img src="./logo.svg" className={`${configMenu ? 'hidden sm:hidden ' : 'block'}  w-12 drawer-group-hover:hidden ml-2`} />
                        <img src="./logo-main.svg" className={`w-52  ${configMenu ? '' : 'sm:hidden'} drawer-group-hover:inline-block`} />
                    </div>
                    <ul className='flex flex-col space-y-8 items-start mt-16 whitespace-nowrap'>
                        {menu.map((page, key) => {
                            let hasSubmenu = page?.submneu
                            let Icon = getIcon(page.path)
                            let active = activeMenu == page.path

                            return <li key={key}
                                onClick={() => {
                                    swichMenu(page.path)
                                    if (!hasSubmenu) {
                                        setIsOpenSubMenu(!isOpenSubMenu)
                                        return
                                    }
                                    setIsOpenSubMenu(!isOpenSubMenu)
                                }}
                            ><Link to={hasSubmenu ? null : page.path}>
                                    <div className='icon-group flex '>
                                        <div className='flex justify-center w-16'>
                                            <Icon isActive={active} />
                                        </div>
                                        <div className=''><span className={`${configMenu ? '' : 'sm:hidden drawer-group-hover:inline-block'} font-normal ${!active ? 'text-black' : 'text-brand-primary'}  fadein_anim_menu_item  hover:text-brand-primary `}>{page.name}</span>

                                            {hasSubmenu && isOpenSubMenu && <ul className={`sm:hidden drawer-group-hover:flex flex-col  ${isOpenSubMenu ? 'h-full' : 'h-0'} overflow-clip transition-all duration-200`}>
                                                {page.submneu.map((menu, key) => {
                                                    return <li >
                                                        <Link to={menu.path}> <p className={`${!active ? 'text-gray-700' : 'text-brand-primary'} hover:text-brand-primary font-normal mt-4`}> {menu.name}</p></Link>
                                                    </li>
                                                })}
                                            </ul>}
                                        </div>
                                    </div>

                                </Link></li>
                        })}
                    </ul>




                    {/* FOOTER */}
                    <ul className={`flex flex-col space-y-8 ${configMenu ? '' : 'sm:items-center'}  drawer-group-hover:items-start mt-8 whitespace-nowrap sm:mt-auto`}>
                        {footermenu.slice(0, 2).map((page, key) => {
                            let hasSubmenu = page?.submneu
                            let Icon = getIcon(page.path)
                            return <li key={key}
                                onClick={() => {
                                    setConfigMenu(configMenu ? null : 'config')
                                    if (!hasSubmenu) {
                                        setIsOpenSubMenu2(!isOpenSubMenu2)
                                        return
                                    }
                                    setIsOpenSubMenu2(!isOpenSubMenu2)
                                    swichMenu(page.name)
                                }}
                            ><Link to={hasSubmenu ? null : page.path}>
                                    <div className={`icon-group flex  items-center ${activeMenu == page.name ? 'py-2' : ''}`}>
                                        <div className='flex justify-center w-16'>
                                            {page.name == 'Configuration' ? <Icon color={activeMenu == page.name ? primary : 'black'} /> :
                                                <div className='size-9 bg-gradient-to-r from-brand-dark to-brand-primary rounded-full text-white flex '>
                                                    <p className='m-auto'>{user?.name?.[0]}</p>
                                                </div>}
                                        </div>
                                        <div className=''><span className={`${configMenu ? 'inline-block' : 'sm:hidden'}   drawer-group-hover:inline-block font-normal text-black fadein_anim_menu_item  hover:text-brand-primary ${activeMenu == page.name ? 'text-brand-primary' : ''}`}>{page.name}</span>
                                        </div>
                                    </div>
                                </Link></li>
                        })}
                    </ul>





                </nav>
            </div>


            {configMenu && <div className={`sm:block w-full fixed left-0 sm:left-24 bottom-0 sm:bottom-8 p-8 min-h-[30vh] sm:min-h-auto  rounded-3xl z-10 bg-white/80 drawer-group sm:w-64 transition-all duration-200 backdrop-blur-lg drop-shadow-2xl`}>
                <div className='flex'>
                    <CloseIcon className='ml-auto mb-4' w='18' h='18' onClick={() => setConfigMenu(false)} />
                </div>

                {/* FOOTER */}
                <ul className='flex flex-col space-y-8   items-start  whitespace-nowrap '>
                    {(activeMenu == 'Configuration' ? footermenu[0]['submneu'] : footermenu[1]['submneu']).map((page, key) => {
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
                                swichMenu(page.name)
                            }}
                        ><Link to={hasSubmenu ? null : page.path}>
                                <div className={`icon-group flex `}>
                                    <Icon color={activeMenu == page.name ? primary : 'black'} />
                                    <div className=''><span className={`inline-block font-normal ml-4 text-black   hover:text-brand-primary ${activeMenu == page.name ? 'text-brand-primary' : ''}`}>{page.name}</span>
                                    </div>
                                </div>
                            </Link></li>
                    })}
                </ul>

            </div>}


        </>
    )
}

export default Drawer