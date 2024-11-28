import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Table, TableSkelton, Button, DropDown, Select } from '../../components'
import { FilterIcon, SearchIcon } from '../../components/Icons'
import mock_campaign from '../../assets/data/mock_audience.json'


const select_options = [{ name: "Add Audience", value: "add_audience" },
{ name: "Rename", value: "rename" },
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
    const [audiences, setAudience] = useState()
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setAudience(mock_campaign.slice(0, 10))
        }, 1000)
    }, [])

    return (
        <Layout>
            <div>

                {/* HEADER */}
                <div className='sm:h-24 sm:flex items-center justify-between'>
                    <h1 className='font-bold text-2xl pt-2'>Audience</h1>
                    <div className='flex flex-col sm:flex-row items-end sm:items-center px-2'>
                        <div className='w-full sm:w-auto'>
                            <SearchInput />
                        </div>
                        <div className='flex my-2 justify-end'>
                            <button className='mx-4 hover:ring-1 hover:ring-brand-primary border-gray-300 cursor-pointer bg-white text-black px-3 p-2 flex items-center justify-center hover:from-45% from-65% w-fit rounded-full font-medium'>
                                <FilterIcon w='20' h='20' className='' />
                            </button>

                            <Button name="Create new list" onClick={() => nav('/audience-create-list')} />
                        </div>
                    </div>
                </div>




                {/* TABLE */}

                {audiences ? <Table
                    // title="title"
                    className="rounded-3xl bg-white p-6 text-gray-800"
                    data={audiences}
                    pageLength={mock_campaign.length / 10}
                    // showTitle={true}
                    renderItem={(item, key, Title) => {
                        return <div
                            key={"users_item_" + key}
                            className={`flex  items-center rounded-md border-b border-brand-background  text-ellipsis whitespace-nowrap  py-5 table-col-b table-col-[#f2f3f5] ${key % 2 == 0 ? 'table-col-b-[#f2f3f5]' : ''} dark:bg-secondary-800`}
                        >
                            <div className="flex-1">
                                {Title('Name')}
                                <p className="text-brand-primary font-medium">
                                    {item.name}
                                </p>
                            </div>


                            <div className="flex-1">
                                {Title('Last Updated')}
                                <p className='max-w-40 font-normal'>
                                    {item.last_updated.split(' ')[0]}
                                </p>
                            </div>

                            <div className="flex-1">
                                {Title('Audience Count')}
                                <p className='break-words text-normal max-w-40'>
                                    {item.audience_count}
                                </p>
                            </div>

                            {/* <div className="table-col">
                <p className="text-sm font-light text-gray-400">Open rate</p>
                <p className='font-normal'>{item.open_rate}</p>
              </div> */}

                            <div className=" flex items-center justify-end min-w-64">
                                <button className='px-6 p-2 -white hover:text-brand-primary rounded-full text-sm  bg-brand-background transition-all duration-200'
                                    onClick={() => nav('/audience-analytics')}
                                >Overview</button>
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
