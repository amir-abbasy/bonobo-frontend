import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Layout, Tabs } from '../../components'
import { CalendarIcon } from '../../components/Icons'
import PieChart from './PieChart';
import Contacts from './Contacts';




function Index() {
    const [tab, setTab] = useState(0)
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

            <ul class="flex flex-wrap  font-medium text-center border-b border-gray-200 _dark:border-gray-700 _dark:text-gray-400">
                <li class="me-2">
                    <button
                        onClick={() => setTab(0)}
                        aria-current="page" class={`${tab == 0 ? 'text-brand-primary bg-white' : 'text-gray-400'} inline-block p-4 text-brand-primary  rounded-t-lg active _dark:bg-gray-800 _dark:text-blue-500`}>Overview</button>
                </li>
                <li class="me-2">
                    <button
                        onClick={() => setTab(1)}
                        class={`${tab == 1 ? 'text-brand-primary bg-white' : 'text-gray-400'} inline-block p-4 text-brand-primary  rounded-t-lg active _dark:bg-gray-800 _dark:text-blue-500`}>Contacts</button>
                </li>
            </ul>


            {/* Charts TAb -1 */}

            {tab == 0 && <div className='flex flex-col lg:flex-row gap-x-8'>
                <div className='flex-1'>
                    <h1 className='font-medium text-xl mt-8 mb-4'>Sent Mail Analystics</h1>
                    <div className='h-fit bg-white p-6 rounded-3xl'>
                        <PieChart />
                    </div>
                </div>

                <div className='flex-1'>
                    <h1 className='font-medium text-xl mt-8 mb-4'>Stacked Bar Chart</h1>
                    <div className='h-fit bg-white p-6 rounded-3xl'>
                        <PieChart />
                    </div>
                </div>

            </div>}

            {tab == 1 && <div>
                <Contacts />
            </div>}


            {/* Contacts TAb -2 */}

        </Layout>
    )
}

export default Index
