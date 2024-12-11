import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Table, TableSkelton, Button, DropDown, Select, SearchInput } from '../../components'
import { FilterIcon, SearchIcon, ArrawIcon } from '../../components/Icons'
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

              <div className='bg-gradient-to-l bg-brand-primaryDark flex items-center rounded-full'>
                <Button name="Create Campaign" onClick={() => nav('/create-campaign')} className='pr-0 text-white' />
                <Select options={[
                  { name: 'A/B Split Campaign ', value: 'a/b' },
                  { name: 'Autoresponder ', value: 'autoresponder' },
                ]}
                  containerClassName="mx-0 mr-1 ml-4"
                  className="w-48" 
                  icon={() => <ArrawIcon w={20} color='white' className='rotate-90' />
                  }
                />
              </div>
            </div>
          </div>
        </div>


        {/* TABLE */}

        {campaigns ? <Table
          // title="title"
          className=" text-gray-800 flex-row pt-12"
          classNameContainer="p-0"
          data={campaigns}
          pageLength={mock_campaign.length / 10}
          showTitle={false}
          renderItem={(item, key, Title) => {
            return <div
              key={"campaigns_item_" + key}
              className={`relative flex items-center justify-between rounded-md border-b border-brand-background  text-ellipsis whitespace-nowrap py-4 table-col-b table-col-[#f2f3f5] ${key % 2 == 0 ? 'table-col-b-[#f2f3f5]' : ''} dark:bg-secondary-800 hover:bg-brand-primary/5 px-4 transition-all duration-200`}
            >
              <div className="mr-16">
                {/* {key == 0 && <p className="font-light text-gray-400 uppercase mb-4">Campaign Name</p>} */}
                {Title('Campaign Name',  "absolute -top-6")}
                <p className="text-brand-primary font-medium">
                  {item.campaign_name}
                </p>
                <p className='text-sm mt-2'>Introducing Cordispatch Software – Elevate Your Cab Se</p>
              </div>
              <div className="table-col">
                {Title('Status',  "absolute -top-6")}
                {/* <p className="text-sm font-light text-gray-400  table-col ">Status</p> */}
                <p className='font-normal'>
                  {item.status}
                </p>
              </div>

              <div className="table-col ">
                {/* <p className="text-sm font-light text-gray-400">Last updated</p> */}
                {Title('Last updated',  "absolute -top-6")}
                <p className='max-w-40 font-normal'>
                  {item.last_updated.split(' ')[0]}
                </p>
              </div>

              <div className="min-w-32">
                {Title('Type',  "absolute -top-6")}
                {/* <p className="text-sm font-light text-gray-400">Type</p> */}
                <p className='break-words text-normal'>
                  {item.type}
                </p>
              </div>

              {/* <div className="table-col">
                <p className="text-sm font-light text-gray-400">Open rate</p>
                <p className='font-normal'>{item.open_rate}</p>
              </div> */}

              <div className="w-56 flex items-center justify-end">
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
