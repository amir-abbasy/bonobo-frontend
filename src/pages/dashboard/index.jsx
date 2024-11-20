import React from 'react';
import { useState } from 'react'
import { Button, Layout } from '../../components'
import { CalendarIcon, CallIcon, MessageIcon, UsersIcon } from '../../components/Icons'
import LineChart from './LineChart';
import StackedChart from './StackedChart';
import { lineChartOption, lineChartNoAxisOption, generateRandomData } from '../../assets/data/chartData'
import { useNavigate } from 'react-router-dom';




function Index() {
  const [count, setCount] = useState(0)
  const nav = useNavigate()

  return (
    <Layout className='pt-8 px-4 sm:px-4 ' >


      <div className='sm:flex justify-between  mb-6'>
        <h1 className='font-bold text-2xl '>Dashboard</h1>
        <div className='flex'>
          <button className='mr-4 border border-gray-300 cursor-pointer text-black p-2 px-4 flex items-center justify-center hover:from-45% from-65% w-fit rounded-full transition-all duration-700 font-medium'>
            <CalendarIcon w='20' h='20' className='mr-2' />
            <p>Today</p>
          </button>
          <Button name='Create Campaign' onClick={() => nav('/create-campaign')} />
        </div>
      </div>



      <div className='bg-white grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between rounded-t-3xl '>
        {[{ name: 'Contacts', count: 8, change: 66, icon: 'call' },
        { name: 'Campaigns', count: 3, change: 166, icon: 'campaign' },
        { name: 'Subscribers', count: 56, change: 126, icon: 'users' },
        { name: 'Mail Sent', count: 20, change: -36, icon: 'mail' }].map((card, i) => {

          let Icon = CallIcon
          switch (card.icon) {
            case 'campaign':
              Icon = CalendarIcon
              break;
            case 'users':
              Icon = UsersIcon
              break;
            case 'mail':
              Icon = MessageIcon
              break;
          }


          return <div className={`${i > 0 ? 'border-l' : ''} border-b lg:border-b-0 flex-1 p-6 flex items-center justify-between`}>
            <div>
              <Icon w={40} h={40} className='strock-gray-500 opacity-20' />
              <div className='mt-2 flex items-center'>
                <p className='font-medium text-gray-800'>{card.name}</p>
                {card?.change && <span className='ml-2 bg-brand-primary text-xs font-bold rounded-full text-white px-2 p-1'>{card.change}%</span>}
              </div>
              <p className='font-bold text-2xl mt-4'>{card.count}</p>
            </div>
            <div className='hidden lg:hidden xl:block sm:block w-32'>
              <LineChart onlyLine={true} options={lineChartNoAxisOption} data={generateRandomData(7, 50, 100)} />
            </div>
          </div>
        })}
      </div>



      <div className='bg-white grid grid-cols-2 lg:grid-cols-4 gap-4 justify-between rounded-b-3xl border-t'>
        {[{ name: 'Email Servers', count: 4, change: 66, icon: 'call' },
        { name: 'Total Subscribers', count: 721, change: 166, icon: 'campaign' },
        { name: 'Daily Sending Limit', count: 1200, change: 126, icon: 'users' },
        { name: 'Unsubscribers', count: 2154, change: -36, icon: 'mail' }].map((card, i) => {

          let Icon = CallIcon
          switch (card.icon) {
            case 'campaign':
              Icon = CalendarIcon
              break;
            case 'users':
              Icon = UsersIcon
              break;
            case 'mail':
              Icon = MessageIcon
              break;
          }


          return <div className={`${i > 0 ? 'border-l ' : ''} border-b lg:border-b-0 flex-1 p-6 flex items-center justify-between`}>
            <div>
              <Icon w={40} h={40} className='strock-gray-500 opacity-20' />
              <div className='mt-2 flex items-center'>
                <p className='font-medium text-gray-800'>{card.name}</p>
                {card?.change && <span className='ml-2 bg-brand-primary text-xs font-bold rounded-full text-white px-2 p-1'>{card.change}%</span>}
              </div>
              <p className='font-bold text-2xl mt-4'>{card.count}</p>
            </div>
            <div className='hidden lg:hidden xl:block sm:block w-32'>
              <LineChart onlyLine={true} options={lineChartNoAxisOption} data={generateRandomData(7, 50, 100)} />
            </div>
          </div>
        })}
      </div>


      <div className='flex flex-col lg:flex-row gap-x-8'>
        <div className='flex-1'>
          <h1 className='font-medium text-xl mt-8 mb-4'>Sent Mail Analystics</h1>
          <div className='h-fit bg-white p-6 rounded-3xl'>
            <LineChart />
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='font-medium text-xl mt-8 mb-4'>Stacked Bar Chart</h1>
          <div className='h-fit bg-white p-6 rounded-3xl'>
            <StackedChart />
          </div>
        </div>

      </div>
      {/* 
      <div>
        <p>
          If you have a previous installation of Inter, you should make sure to remove those fonts files before installing new ones. You need to install the font for all users, as some software requires fonts to be global.

          Variable & Static font files
          Inter fonts comes in two flavors: Variable and Static (InterVariable*.ttf and Inter.ttc, respectively.)

          Variable fonts is a new format which allows you to choose any weight and optical size. Variable fonts is a relatively new technology and may not yet be supported by all your software. Inter's variable font is called "Inter Variable" to avoid confusion and to allow use alongside the traditional static fonts.

          Static fonts works with older software and uses a fixed set of predefined mixtures of weight and optical size. For example "Inter Display Medium" is Inter with maximum optical size and a weight of 500.</p>
      </div> */}
    </Layout>
  )
}

export default Index
