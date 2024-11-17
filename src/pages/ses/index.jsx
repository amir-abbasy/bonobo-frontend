import React, { useEffect } from 'react';
import { useState } from 'react'
import { Layout, Table, TableSkelton, Button, DropDown, Select } from '../../components'
import menu from '../../assets/data/mock.json'
import { useNavigate } from 'react-router-dom';
import { MoreIcon } from '../../components/Icons'


function Index() {
  const [payoutRequests, setPayoutRequests] = useState()
  const [options, setOpstion] = useState({ value: 'value', data: [{ title: 'Amir', value: 'amir' }, { title: 'Amir2', value: 'amir2' }] })
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setPayoutRequests(menu.slice(0, 10))
    }, 2000)
  }, [])

  return (
    <Layout>
      <div>

        <div className='h-24 flex items-center justify-between'>
          <h1 className='font-bold text-2xl'>SES</h1>


          <div>
            <Button name="Create SES" onClick={() => nav('/create-ses')} />
          </div>

        </div>


        {/* {"id":9,"first_name":"Sukey","last_name":"Corrin","email":"scorrin8@yale.edu","gender":"Female","ip_address":"114.96.63.144"}, */}

        {payoutRequests ? <Table
          // title="title"
          className="rounded-3xl bg-white p-6 text-gray-800"
          data={payoutRequests}
          pageLength={payoutRequests.length}
          // showTitle={true}
          renderItem={(item, key) => {
            return <div
              key={"payoutRequests_item_" + key}
              className={`flex  rounded-md border-b border-brand-background  text-ellipsis whitespace-nowrap  py-4 table-col-b table-col-[#f2f3f5] ${key % 2 == 0 ? 'table-col-b-[#f2f3f5]' : ''} dark:bg-secondary-800`}
            >
              <div className="table-col">
                <p className="text-xs font-normal text-gray-400">First Name</p>
                <p className="">
                  {item.first_name}
                </p>
              </div>
              <div className="table-col">
                <p className="text-xs font-normal text-gray-400  table-col ">Last Name</p>
                <a className="text-md truncate ... " href={`${'BLOCKSCAN'}address/${'wallet'}`} target="_blank">
                  {item.last_name}
                </a>
              </div>

              <div className="table-col ">
                <p className="text-xs font-normal text-gray-400">Address</p>
                <p className='break-words text-sm max-w-40'>
                  {item.ip_address}
                </p>
              </div>

              <div className="min-w-64">
                <p className="text-xs font-normal text-gray-400">Email</p>
                <p className='break-words text-sm max-w-40'>
                  {item.email}
                </p>
              </div>

              <div className="table-col">
                <p className="text-xs font-normal text-gray-400">gender</p>
                <p className=' text-wrap break-words ...'>{item.gender}</p>
              </div>

              <div className=" flex items-center w-full justify-end min-w-64">
                <button className='px-6 p-2 -white hover:text-brand-primary rounded-full text-sm  bg-brand-background transition-all duration-200'>View email</button>
                <Select />
              </div>

            </div>
          }}
        /> : <TableSkelton row={10} className="p-6 " />}

      </div>
    </Layout>
  )
}

export default Index
