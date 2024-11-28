import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Layout, Tabs } from '../../components'
import { CalendarIcon } from '../../components/Icons'
import Profile from './Profile'
import UsersTable from './UsersTable'
import Domains from './Domains'

const tabs = ["Profile", "Account", "Users", "Billing", "Mail Servers", "Email Verification"]

function Index() {
    const nav = useNavigate()
    const { tab } = useParams()
    const [activeTtab, setActiveTab] = useState(tabs.indexOf(tab))
    

    return (
        <Layout className='pt-8 bg-white' >
            {/* Tabs */}
            <ul class="flex flex-wrap text-center border-b border-gray-200 _dark:border-gray-700 _dark:text-gray-400">
                {tabs.map((tab, tabIdx) => {
                    return <li class="me-2">
                        <button
                            onClick={() => setActiveTab(tabIdx)}
                            aria-current="page"
                            className={`${activeTtab == tabIdx ? 'text-brand-primary bg-brand-primary/5 border-b border-brand-primary' : 'text-black'} inline-block px-12 p-4 font-normal  active _dark:bg-gray-800 _dark:text-blue-500`}>{tab}</button>
                    </li>
                })}

            </ul>
        
            {/* TABS BODY */}
            {activeTtab == 0 && <Profile />}
            {activeTtab == 1 && <UsersTable />}
            {/* ...other tabs here */}
            {!activeTtab.toString().match('01') && <Domains />}


        </Layout>
    )
}

export default Index
