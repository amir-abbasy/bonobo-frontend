import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Table, TableSkelton, Button, DropDown, Select, SearchInput } from '../../components'
import { SettingIcon } from '../../components/Icons'
import mock_campaign from '../../assets/data/mock_campaign.json'


function Index() {
    const [templates, setTemplates] = useState()
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTemplates(mock_campaign.slice(0, 9))
        }, 2000)
    }, [])

    return (
        <Layout className="bg-none">
            <div>
                <h1 className='sm:hidden font-bold text-2xl pt-6'>Template Gallery</h1>

                {/* HEADER */}
                <div className='sm:h-24 flex items-center justify-between  '>
                    <h1 className='hidden sm:block font-bold text-2xl'>Template Gallery</h1>

                    <Button name="Create Template" onClick={() => null} />
                </div>


                {/* TABLE */}

                {templates ? <Table
                    // title="title"
                    classNameContainer="bg-transparent"
                    className="flex flex-row flex-wrap justify-between"
                    data={templates}
                    pageLength={mock_campaign.length / 10}
                    showTitle={false}
                    renderItem={(item, key, Title) => {
                        return <div
                            key={"template_item_" + key}
                            className={`w-2/8 bg-white my-8 p-6 rounded-2xl`}
                        >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtbe9Ebyke-SKytFKEQgb_H6-4lqKPOjsIQ&s"
                                className='rounded-2xl'
                            />

                            <div className={`flex justify-between gap-4`}  >
                                {[{}, {}, {}].map((action, ac_key) => {
                                    return <div key={"template_item_" + ac_key} className='mt-4 w-1/3 size-16 bg-slate-100 rounded-2xl flex items-center justify-center hover:bg-brand-primary cursor-pointer'>
                                        <SettingIcon />
                                    </div>
                                })}
                            </div>

                            <p className='font-semibold text-xl mt-2'>Template {key}</p>
                        </div>
                    }}
                /> : <TableSkelton row={10} className="p-6 " />}

            </div>
        </Layout>
    )
}

export default Index
