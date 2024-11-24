import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Table, TableSkelton, Button, DropDown, Select, SearchInput } from '../../components'
import { FilterIcon, SearchIcon } from '../../components/Icons'
import mock_campaign from '../../assets/data/mock_campaign.json'


const select_options = [{ name: "View Email", value: "view_email" },
{ name: "Edit", value: "edit" },
{ name: "Duplicate", value: "duplicate" },
{ name: "Delete", value: "delete" }]



function Index() {
  const [campaigns, setCampaigns] = useState()
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCampaigns(mock_campaign.slice(0, 10))
    }, 2000)
  }, [])

  return (
    <Layout>
      <div>
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

        {campaigns ? <Table
          // title="title"
          className=" text-gray-800 flex-row"
          data={campaigns}
          pageLength={mock_campaign.length / 10}
          showTitle={false}
          renderItem={(item, key, Title) => {
            return <div
              key={"payoutRequests_item_" + key}
              className={`flex items-center rounded-md border-b border-brand-background  text-ellipsis whitespace-nowrap  py-4 table-col-b table-col-[#f2f3f5] ${key % 2 == 0 ? 'table-col-b-[#f2f3f5]' : ''} dark:bg-secondary-800`}
            >
              <div className="mr-16">
                {/* {key == 0 && <p className="font-light text-gray-400 uppercase mb-4">Campaign Name</p>} */}
                {Title('Campaign Name')}
                <p className="text-brand-primary font-medium">
                  {item.campaign_name}
                </p>
                <p className='text-sm mt-2'>Introducing Cordispatch Software – Elevate Your Cab Se</p>
              </div>
              <div className="table-col">
                {Title('Status')}
                {/* <p className="text-sm font-light text-gray-400  table-col ">Status</p> */}
                <p className='font-normal'>
                  {item.status}
                </p>
              </div>

              <div className="table-col ">
                {/* <p className="text-sm font-light text-gray-400">Last updated</p> */}
                {Title('Last updated')}
                <p className='max-w-40 font-normal'>
                  {item.last_updated.split(' ')[0]}
                </p>
              </div>

              <div className="min-w-64">
                {Title('Type')}
                {/* <p className="text-sm font-light text-gray-400">Type</p> */}
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
