import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Table, TableSkelton, Button, DropDown, Select } from '../../components'
import { FilterIcon, SearchIcon } from '../../components/Icons'
import mock_contacts from '../../assets/data/mock_contacts.json'


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


function Contacts() {
    const [payoutRequests, setPayoutRequests] = useState()
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setPayoutRequests(mock_contacts.slice(0, 10))
        }, 1000)
    }, [])

    return (
        <div>
            {/* TABLE */}
            {payoutRequests ? <Table
                // title="title"
                className="rounded-3xl bg-white p-6 text-gray-800"
                data={payoutRequests}
                pageLength={mock_contacts.length / 10}
                // showTitle={true}
                renderItem={(item, key) => {
                    return <div
                        key={"payoutRequests_item_" + key}
                        className={`flex  items-center rounded-md border-b border-brand-background  text-ellipsis whitespace-nowrap  py-4 table-col-b table-col-[#f2f3f5] ${key % 2 == 0 ? 'table-col-b-[#f2f3f5]' : ''} dark:bg-secondary-800`}
                    >
                        <div className="flex-1">
                            <p className="text-sm font-light text-gray-400">Email ID</p>
                            <p className="text-brand-primary font-medium">
                                {item.email_id}
                            </p>
                        </div>


                        <div className="flex-1">
                            <p className="text-sm font-light text-gray-400">Rating</p>
                            <p className='max-w-40 font-normal'>
                                {item.rating}
                            </p>
                        </div>

                        <div className="flex-1">
                            <p className="text-sm font-light text-gray-400">Name</p>
                            <p className='break-words text-normal max-w-40'>
                                {item.name}
                            </p>
                        </div>

                        <div className="flex-1">
                            <p className="text-sm font-light text-gray-400">Status</p>
                            <p className='font-normal'>{item.status}</p>
                        </div>

                        <div className=" flex items-center justify-end min-w-64">
                            <button className='px-6 p-2 -white hover:text-brand-primary rounded-full text-sm  bg-brand-background transition-all duration-200'>Overview</button>
                            <Select options={select_options} />
                        </div>

                    </div>
                }}
            /> : <TableSkelton row={10} className="p-6 " />}
        </div>
    )
}

export default Contacts
