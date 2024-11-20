import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Table, TableSkelton, Button, DropDown, Select, Modal } from '../../components'
import { FilterIcon, SearchIcon } from '../../components/Icons'
import mock_automation from '../../assets/data/mock_automation.json'


const select_options = [{ name: "View Email", value: "view_email" },
{ name: "Edit", value: "edit" },
{ name: "Duplicate", value: "duplicate" },
{ name: "Delete", value: "delete" }]






function SearchInput() {
  return (
    <div className="relative w-full max-w-sm">

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
  const [mockData, SetmockData] = useState()
  const [showModal, setShowModal] = useState(false)
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      SetmockData(mock_automation.slice(0, 10))
    }, 2000)
  }, [])

  return (
    <Layout>
      <div>

        {/* HEADER */}
        <div className='h-24 flex items-center justify-between'>
          <h1 className='font-bold text-2xl'>Campaigns</h1>

          <div className='flex'>
            <div>
              <SearchInput />
            </div>
            <button className='mx-4 hover:ring-1 hover:ring-brand-primary border-gray-300 cursor-pointer bg-white text-black px-3 p-2 flex items-center justify-center hover:from-45% from-65% w-fit rounded-full font-medium'>
              <FilterIcon w='20' h='20' className='' />
            </button>

            <Button name="Add Server" onClick={() => setShowModal(true)} />
          </div>
        </div>


        {/* TABLE */}
        {mockData ? <Table
          // title="title"
          className="rounded-3xl bg-white p-6 text-gray-800"
          data={mockData}
          pageLength={mock_automation.length / 10}
          // showTitle={true}
          renderItem={(item, key) => {
            return <div
              key={"mockData_item_" + key}
              className={`flex items-center rounded-md border-b border-brand-background  text-ellipsis whitespace-nowrap  py-4 table-col-b table-col-[#f2f3f5] ${key % 2 == 0 ? 'table-col-b-[#f2f3f5]' : ''} dark:bg-secondary-800`}
            >
              <div className="mr-16">
                <p className="text-sm font-light text-gray-400">Name</p>
                <p className="text-brand-primary font-medium">
                  {item.name}
                </p>
              </div>
              <div className="table-col">
                <p className="text-sm font-light text-gray-400  table-col ">From Email</p>
                <p className='font-normal'>
                  {item.from_email}
                </p>
              </div>

              <div className="table-col ">
                <p className="text-sm font-light text-gray-400">From Name</p>
                <p className='max-w-40 font-normal'>
                  {item.from_name}
                </p>
              </div>

              <div className="min-w-64">
                <p className="text-sm font-light text-gray-400">Type</p>
                <p className='break-words text-normal max-w-40'>
                  {item.type}
                </p>
              </div>


              <div className="min-w-64">
                <p className="text-sm font-light text-gray-400">Hostname</p>
                <p className='break-words text-normal max-w-40'>
                  {item.hostname}
                </p>
              </div>

              <div className=" flex items-center w-full justify-end min-w-64">
                {/* <button className='px-6 p-2 -white hover:text-brand-primary rounded-full text-sm  bg-brand-background transition-all duration-200'>{key % 3 == 0 ? "Statistics" : "View email"}</button> */}
                <Select options={select_options} />
              </div>

            </div>
          }}
        /> : <TableSkelton row={10} className="p-6 " />}

      </div>





      <Modal visible={showModal} onClose={() => setShowModal(false)} title="Mail Server" >
        <section className='p-8 '>
          <div class="text-center">
            <h3 className='text-2xl font-normal'> Choose Your Mail Server </h3>
            <p className='my-4 text-slate-800'> Choose the perfect option to create campaign that generate more leads, attract more <br />subscribers, and make more sales.</p>
          </div>

          <div className='flex text-center justify-center  gap-x-8 px-32'>
            {[{ name: 'SMTP', path: 'smtp', desc: 'Choose from ready to use templates', icon: 'https://app2.mailercloud.com/img/template-gallery.455c3d23.svg' },
            { name: 'API', path: 'api', desc: 'Create a campaign by simple drag and drop', icon: 'https://app2.mailercloud.com/img/drag-drop-builder.5dc38ce3.svg' }].map((option, key) => {
              return <div className='flex flex-col items-center cursor-pointer ' onClick={() => nav('/add-server/' + option.path)}>
                <div className='my-4 border rounded-3xl p-10 size-44 hover:bg-slate-100' >
                  <img src={option.icon} />
                </div>
                <p className='font-semibold text-lg'>{option.name}</p>
                <p className='text-sm text-slate-800 w-44'>{option.desc}</p>
              </div>
            })}
          </div>

          <Button className="bg-none border text-slate-600 hover:bg-slate-200" name="Cancel" onClick={() => setShowModal(false)} />
        </section>
      </Modal>


    </Layout>
  )
}

export default Index
