import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Layout, Tabs } from '../../components'
import { CalendarIcon } from '../../components/Icons'




function Index() {
    const [activeTtab, setActiveTab] = useState(0)
    const nav = useNavigate()

    return (
        <Layout className='pt-8' >


            <div className='flex justify-between  mb-6'>
                <h1 className='font-bold text-2xl '>Analytics</h1>
                {/* <div className='flex'>
                    <button className='mr-4 border border-gray-300 cursor-pointer text-black p-2 px-4 flex items-center justify-center hover:from-45% from-65% w-fit rounded-full transition-all duration-700 font-medium'>
                        <p>Close</p>
                    </button>
                </div> */}
            </div>

            {/* Tabs */}
            {/* <Tabs /> */}

            <ul class="flex flex-wrap text-center border-b border-gray-200 _dark:border-gray-700 _dark:text-gray-400">

                {["Profile", "Settings", "Sender authentication", "Integration", "Plan & Billing"].map((tab, tabIdx) => {
                    return <li class="me-2">
                        <button
                            onClick={() => setActiveTab(tabIdx)}
                            aria-current="page"
                            className={`${activeTtab == tabIdx ? 'text-brand-primary bg-white' : 'text-black'} inline-block px-12 p-4 rounded-t-lg active _dark:bg-gray-800 _dark:text-blue-500`}>{tab}</button>
                    </li>
                })}

            </ul>


            {/* Charts TAb -1 */}

            <div className='flex flex-col lg:flex-row gap-x-8'>
                <div className='flex-1'>
                    <h1 className='font-medium text-xl mt-8 mb-4'>Tab {activeTtab + 1}</h1>
                </div>
            </div>



            {/* Contacts TAb -2 */}

        </Layout>
    )
}

export default Index
