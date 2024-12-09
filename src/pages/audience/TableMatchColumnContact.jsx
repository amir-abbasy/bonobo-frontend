import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Table, TableSkelton, Button, DropDown, Select, LucideIcon } from '../../components'
import { PlusIcon } from 'lucide-react';


function Contacts() {
    const [contacts, setContacts] = useState()
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setContacts([{
                "email_id": "user1@example.com",
                "rating": 4.5,
                "name": "User 1",
                "status": "Active"
            },
            {
                "email_id": "user2@example.com",
                "rating": 3.8,
                "name": "User 2",
                "status": "Inactive"
            },
            {
                "email_id": "user3@example.com",
                "rating": 4.2,
                "name": "User 3",
                "status": "Pending"
            }])
        }, 1000)
    }, [])

    return (
        <div className='overflow-x-scroll sm:overflow-x-visible'>

            {/* TABLE */}
            {contacts ? <Table
                // title="title"
                className="rounded-3xl bg-white py-6 text-gray-800 overflow-visible"
                data={contacts}
                // pageLength={mock_contacts.length / 10}
                // showTitle={true}
                renderItem={(item, key, Title) => {
                    return <div
                        key={"payoutRequests_item_" + key}
                        className={`flex  items-center rounded-md border-b border-brand-background  text-ellipsis whitespace-nowrap  py-4 table-col-b table-col-[#f2f3f5] ${key % 2 == 0 ? 'table-col-b-[#f2f3f5]' : ''} dark:bg-secondary-800`}
                    >

                        <div className="flex-1">
                            {Title('Row 1')}
                            <p className="text-brand-primary font-medium">
                                {item.email_id}
                            </p>
                        </div>


                        <div className="flex-1">
                            {Title('Matched')}
                            <div className='max-w-40 font-normal flex'>
                                <LucideIcon name={'CircleCheck'} color={'#0ee363'} />
                            </div>
                        </div>

                        <div className="flex-1">
                            {Title('Matching attribute')}
                            <div className=" flex items-center justify-end min-w-64">
                                <DropDown
                                    // title="Choose crypto token"
                                    data={new Array(6).fill({ title: 'sad', value: '10' })}
                                    // value={options.value}
                                    placeholder="Select"
                                    onSelect={(value) => setOption((prev) => ({ ...prev, value }))}
                                    renderItem={(item) => (
                                        <div>
                                            <p className="text-xl">{item.title}</p>
                                        </div>
                                    )}
                                    classNameContainer="mt-4 flex-1"
                                    search={true}
                                    footer={() => (
                                        <div className='bg-brand-primary/10 py-3'>
                                            <Button className='bg-none  text-brand-primary' name='Add new field'
                                                iconLeft={() => <PlusIcon color='#4579ff' w="20" h="20" className='mr-2' />}
                                            />
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                }}
            /> : <TableSkelton row={10} className="p-6 " />}
        </div>
    )
}

export default Contacts
