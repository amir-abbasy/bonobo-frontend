import React, { useEffect, useRef } from 'react';
import { useState } from 'react'
import { Layout, DropDown, Button, Modal, SearchInput, TableSkelton, Table, Select, LucideIcon } from '../../../components'
import DynamicForm from '../../../components/Form';
import Joi from 'joi';
import { CloseIcon, DirectionIcon, PlusIcon } from '../../../components/Icons';
import { useNavigate } from 'react-router-dom';
import mock_audience from '../../../assets/data/mock_audience.json'


const ConditionComponent = ({ data, onRemove, error }) => {
  return <div className='my-8 flex flex-wrap items-center gap-x-4 p-4 rounded-lg border border-dashed ' >
    <LucideIcon name="GripVertical" color={"#ccc"} size="20" />
    <span>
      <DropDown data={
        ["Subscriber status", "Email verified", "Email rating", "Subscriber in portion", "Email address", "Domain", "First name", "Last name", "Contact tag"].map(_ => ({ value: _, title: _ }))
      }
        value={data.val1}
        search={true}
        className="w-full"
        classNameContainer={`min-w-44 ${error && 'border border-red-500 rounded-xl'}`}
      />
    </span>

    <span>
      <DropDown data={
        ["Is", "Is not"].map(_ => ({ value: _, title: _ }))
      }
        value={data.val2}
        className="w-full"
        classNameContainer={`min-w-44 ${error && 'border border-red-500 rounded-xl'}`}
      />
    </span>

    <span>
      <DropDown data={
        ["Equals", "Not Equals", "Starts with", "Contains", "Ends with", "Is empty", "Is not empty"].map(_ => ({ value: _, title: _ }))
      }
        value={data.val3}
        className="w-full"
        classNameContainer={`min-w-44 ${error && 'border border-red-500 rounded-xl'}`}
      />
    </span>

    <button onClick={onRemove}>
      <LucideIcon name="Trash2" color={"#999"} size="20" />
    </button>


  </div>
}


function Index() {
  const [audiences, setAudience] = useState()
  const [conditions, setConditions] = useState([{
    val1: "Subscriber status",
    val2: "Is",
    val3: "Equals",
  }])
  const [recipientsList, setRecipientsList] = useState([])
  const [activeSection, setActiveSection] = useState(0) // choose_contacts, preview_campaign
  // const [showModal, setShowModal] = useState(false)
  const [showRecipientsList, setShowRecipientsList] = useState(false)

  const nav = useNavigate()

  const childButtonRef = useRef(null);

  // Submit Handler
  const handleFormSubmit = (formValues) => {
    console.log('Form Data:', formValues);

  };


  useEffect(() => {
    setTimeout(() => {
      setAudience(mock_audience.slice(0, 10))
    }, 1000)
  }, [])




  return <Layout className='pt-8 px-2 sm:px-0  flex flex-col relative pb-32 bg-white' >

    <div className='flex  items-center justify-between  p-4'>
      <h1 className='font-bold text-2xl '>Create segment</h1>
      <CloseIcon onClick={() => nav('/audience-lists')} />
    </div>

    <div className='flex flex-col  justify-center mt-12 m-auto'>
      <DynamicForm
        data={[
          {
            type: 'text',
            name: 'Segment name *',
            label: 'Segment name *',
            validation: Joi.string().required().messages({
              'string.empty': 'Type is required',
            }),
            className: "p-4"
          },

        ]}
        onSubmit={handleFormSubmit}
        // itemClassName="border-red-400 bg-brand-background "
        // label={false}
        className=""
        submitClassName="invisible hidden" // hides orginal button
        submitName="Save & Continue"
        // submitButton={() => <button onClick={() => handleParentButtonClick()}>Click</button>}
        buttonRef={childButtonRef}
      />

      <div>
        <p className='text-gray-600 font-medium  text-sm mt-8'>Selected list</p>
        {recipientsList.length != 0 ? <div>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl my-4 font-semibold'>Selected List</h2>
            <p className='text-brand-primary cursor-pointer' onClick={() => setShowRecipientsList(true)}>Edit</p>
          </div>
          <div className='flex gap-2'>
            {recipientsList.map(id => {
              return <div className='bg-brand-primary/10 px-4 p-2 rounded-full text-sm'>
                {audiences[id]['name']}
              </div>
            })}
          </div>

        </div> : <Button className='bg-none border text-brand-primary  hover:bg-brand-primary/30 pl-3 mt-4' name='Choose List'
          iconLeft={() => <PlusIcon color='#4579ff' w="20" h="20" className='mr-2' />}
          onClick={() => setShowRecipientsList(true)}
        />}

      </div>


      <div className='my-8 flex flex-wrap items-center gap-x-4'>
        <LucideIcon name="Workflow" />
        <span>Add conditions</span>

        <p>Contacts match</p>
        <span>
          <DropDown data={[
            { value: 'all', title: 'All' },
            { value: 'any', title: 'Any' },
          ]}
            value={'all'}
            // search={true}
            className="w-fit"
            classNameContainer="min-w-fit max-w-96"
          />
        </span>
        <p> of the following conditions:</p>
        <LucideIcon name="CornerRightDown" color={"#ccc"} size="20" />

      </div>




      <div>
        {conditions.map((condition, key) => {
          return <ConditionComponent data={condition} error={key > 0} key={key} onRemove={() => {
            setConditions([conditions[0]])
          }} />
        })}

        <Button className='bg-none border text-brand-primary  hover:bg-brand-primary/30 pl-3 mt-4'
          name='Add new condition'
          iconLeft={() => <PlusIcon color='#4579ff' w="20" h="20" className='mr-2' />}
          onClick={() => {
            setConditions([...conditions, conditions[0]])
          }}
        />
      </div>





      {/* SAVE & CANCEL */}
      <div className='flex justify-end w-full mt-8'>
        <Button className="p-3 px-8 mr-8 bg-none hover:bg-slate-200 text-slate-600 border" name='Cancel'
          onClick={_ => {
            if (activeSection == 0) return
            setActiveSection(activeSection - 1)
          }}
        // iconLeft={() => <DirectionIcon color="#444" className='mr-4  -scale-100' />}

        />

        <div className='flex'>
          {activeSection == 2 && <Button className="p-3 px-8 bg-none hover:bg-slate-200 text-slate-600 border mr-4" name='Schedule'
            onClick={_ => setSheduleModal(true)}
          />}
          <Button className="p-3 px-8 text-white" name='Save'
            onClick={_ => proceed()}
          // iconRight={() => <DirectionIcon color="white" className='ml-4' />}

          />
        </div>
      </div>

    </div>






    {/* MODAL NEW PROPERTY */}
    <Modal visible={showRecipientsList}
      title=""
      onClose={() => setShowRecipientsList(false)}
      containerClassName="justify-end "
      className="h-screen w-full xl:w-2/3"
    >
      <section className='px-8  pb-8'>
        <h3 className='text-2xl font-normal'>Create new property</h3>
        {/* TABLE */}

        {audiences ? <Table
          // title="title"
          className="rounded-3xl bg-white p-6 text-gray-800"
          data={audiences}
          pageLength={mock_audience.length / 10}
          // showTitle={true}
          renderItem={(item, key, Title) => {
            return <div
              key={"users_item_" + key}
              className={`flex  items-center rounded-md border-b border-brand-background  text-ellipsis whitespace-nowrap  py-5 table-col-b table-col-[#f2f3f5] ${key % 2 == 0 ? 'table-col-b-[#f2f3f5]' : ''} dark:bg-secondary-800`}
            >
              <div className="flex-[.4]">
                {Title('Select')}
                <input type='checkbox' className='form-checkbox text-blue-600 mr-4 size-4'
                  onChange={_ => {
                    if (_.target.checked) {
                      setRecipientsList([...recipientsList, key])
                    } else {
                      let remove = recipientsList.filter(_ => _ != key)
                      setRecipientsList(remove)
                    }
                  }}
                  checked={recipientsList.includes(key)}
                />
              </div>

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
                {Title('Active contacts')}
                <p className='break-words text-normal max-w-40'>
                  {item.audience_count}
                </p>
              </div>


            </div>
          }}
        /> : <TableSkelton row={10} className="p-6 " />}


        <div className='flex gap-x-8'>
          <Button className="text-white" name="Continue" onClick={() => setShowRecipientsList(false)} />
          <Button className="bg-none border text-slate-600 hover:bg-slate-200" name="Cancel" onClick={() => setShowRecipientsList(false)} />
        </div>
      </section>
    </Modal>

  </Layout>
}

export default Index
