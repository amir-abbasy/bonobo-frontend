import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Table, TableSkelton, Button, DropDown, Select } from '../../components'
import { FilterIcon, SearchIcon } from '../../components/Icons'
import mock_campaign from '../../assets/data/mock_campaign.json'


const select_options = [{ name: "View Email", value: "view_email" },
{ name: "Edit", value: "edit" },
{ name: "Duplicate", value: "duplicate" },
{ name: "Delete", value: "delete" }]






function SearchInput({className}) {
  return (
    <div className="relative sm:max-w-sm  ">

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
      />

      {/* Search Icon */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <SearchIcon w='20' h='20' className='' />
      </div>

    </div>
  );
}


function Index() {
  const [payoutRequests, setPayoutRequests] = useState()
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setPayoutRequests(mock_campaign.slice(0, 10))
    }, 2000)
  }, [])

  return (
    <Layout>
      <div>
      <h1 className='sm:hidden font-bold text-2xl pt-6'>Campaigns</h1>

        {/* HEADER */}
        <div className='sm:h-24 flex items-center justify-between  '>
          <h1 className='hidden sm:block font-bold text-2xl'>Campaigns</h1>

          <div className='flex flex-col sm:flex-row my-4 w-full sm:w-auto'>
            <div>
              <SearchInput className="w-full" />
            </div>
            <div className='flex'>
              <button className='mx-4 hover:ring-1 hover:ring-brand-primary border-gray-300 cursor-pointer bg-white text-black px-3 p-2 flex items-center justify-center hover:from-45% from-65% w-fit rounded-full font-medium'>
                <FilterIcon w='20' h='20' className='' />
              </button>

              <Button name="Create Campaign" onClick={() => nav('/create-campaign')} />
            </div>
          </div>
        </div>


        {/* TABLE */}

        {payoutRequests ? <Table
          // title="title"
          className="rounded-3xl bg-white p-6 text-gray-800"
          data={payoutRequests}
          pageLength={mock_campaign.length / 10}
          // showTitle={true}
          renderItem={(item, key) => {
            return <div
              key={"payoutRequests_item_" + key}
              className={`flex items-center rounded-md border-b border-brand-background  text-ellipsis whitespace-nowrap  py-4 table-col-b table-col-[#f2f3f5] ${key % 2 == 0 ? 'table-col-b-[#f2f3f5]' : ''} dark:bg-secondary-800`}
            >
              <div className="mr-16">
                {/* <p className="text-sm font-light text-gray-400">Campaign Name</p> */}
                <p className="text-brand-primary font-medium">
                  {item.campaign_name}
                </p>
                <p className='text-sm mt-2'>Introducing Cordispatch Software – Elevate Your Cab Se</p>
              </div>
              <div className="table-col">
                <p className="text-sm font-light text-gray-400  table-col ">Status</p>
                <p className='font-normal'>
                  {item.status}
                </p>
              </div>

              <div className="table-col ">
                <p className="text-sm font-light text-gray-400">Last updated</p>
                <p className='max-w-40 font-normal'>
                  {item.last_updated.split(' ')[0]}
                </p>
              </div>

              <div className="min-w-64">
                <p className="text-sm font-light text-gray-400">Type</p>
                <p className='break-words text-normal max-w-40'>
                  {item.type}
                </p>
              </div>

              {/* <div className="table-col">
                <p className="text-sm font-light text-gray-400">Open rate</p>
                <p className='font-normal'>{item.open_rate}</p>
              </div> */}

              <div className=" flex items-center w-full justify-end min-w-64">
                <button className='px-6 p-2 -white hover:text-brand-primary rounded-full text-sm  bg-brand-background transition-all duration-200'>{key % 3 == 0 ? "Statistics" : "View email"}</button>
                <Select options={select_options} />
              </div>

            </div>
          }}
        /> : <TableSkelton row={10} className="p-6 " />}

      </div>
    </Layout>
  )
}

export default Index
