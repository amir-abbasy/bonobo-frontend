import React from 'react';
import { useState } from 'react'
import { Layout, DropDown, Button, Modal } from '../../components'
import DynamicForm from '../../components/Form';

import Joi from 'joi';


const formData = [
  {
    type: 'text',
    name: 'Campaign Name',
    placeholder: 'Campaign Name',
    // label: 'SES Name',
    validation: Joi.string().min(3).max(30).required().messages({
      'string.empty': 'SES Name is required',
      'string.min': 'SES Name must be at least 3 characters long',
      'string.max': 'SES Name must be at most 30 characters long',
    }),
    // layout: 'row',
    className: "",
    containerClass: "",
    // showLabel: false
  },
  {
    type: 'email',
    name: 'Subject Line',
    label: 'Subject Line',
    placeholder: 'Subject Line',
    validation: Joi.string().required().messages({
      'string.empty': 'Subject Line',
      // 'string.email': 'Subject Line must be a valid email address',
    }),
    layout: 'row',
  },
  {
    type: 'select',
    name: 'type ',
    label: 'Type ',
    options: [
      { value: 'SMTP ', title: 'SMTP' },
      { value: 'API', title: 'API' },
    ],
    validation: Joi.string().required().messages({
      'string.empty': 'Type is required',
    }),
  },
  {
    type: 'select',
    name: 'Sender name ',
    label: 'Sender name',
    placeholder: 'Sender name',
    options: [
      { value: 'amirabbasyk@gmail.com ', title: 'amirabbasyk@gmail.com' },
      { value: 'maadanabbasy@gmail.com', title: 'maadanabbasy@gmail.com' },
    ],
    validation: Joi.string().required().messages({
      'string.empty': 'Sender is required',
    }),
  },
];


const sections = ['Create campaign', 'Choose contacts', 'Preview campaign']

function Index() {
  const [options, setOpstion] = useState({ value: 'value', data: [{ title: 'Amir', value: 'amir' }, { title: 'Amir2', value: 'amir2' }] })
  const [activeSection, setActiveSection] = useState('Create campaign') // choose_contacts, preview_campaign
  const [showModal, setShowModal] = useState(false)



  // Submit Handler
  const handleFormSubmit = (formValues) => {
    console.log('Form Data:', formValues);
  };

  return (
    <Layout className='pt-8' >
      <div className='flex items-center'>
        <h1 className='font-bold text-2xl my-4'>Create campaign</h1>
      </div>

      <div className='flex w-full items-center justify-center text-center gap-x-4 mb-8'>
        {sections.map((section, key) => {
          return <div className='flex items-center cursor-pointer' key={key}>
            {key > 0 && <div className={`h-[1px] w-12  ${section == activeSection ? 'bg-brand-primary' : 'bg-gray-300'} `} />}
            <div className={`size-6 mr-4 rounded-full border-[6px]  ${section == activeSection ? 'bg-white  border-brand-primary' : 'bg-gray-500  border-gray-300'} `} />
            <a className={` font-normal text-sm ${section == activeSection ? 'text-brand-primary' : 'text-gray-500'}`}>{section}</a>
          </div>
        })}
      </div>

      <div className='flex justify-between'>
        <div className='bg-white w-fit rounded-3xl p-6'>
          <DynamicForm
            data={formData}
            onSubmit={handleFormSubmit}
            // itemClassName="border-red-400 bg-brand-background "
            // label={false}
            // containerClass="w-full"
            // className="space-between"
            submitClassName="button-primary px-8"
            submitName="Save & Continue"
          />

        </div>


        <div className='bg-gradient-to-t from-white rounded-3xl p-6 flex flex-col flex-1 ml-6'>
          <div className='border p-4 rounded-2xl border-brand-primary'>
            <p className='font-bold'>Subject line <span className='font-normal ml-2'>asdasd</span></p>
            <p className='font-bold'>From <span className='font-normal ml-2'>Cordispatch Software business@cordispatch.com</span></p>
            <p className='font-bold'>Preview text <span className='font-normal ml-2'>asdasd</span></p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src="https://app2.mailercloud.com/img/email-content.806ec997.svg" className='m-auto w-64 mt-auto' />
            <h5 className='font-bold text-xl my-4'>Add Email Content</h5>
            <p className=''>Create Engaging Email Content with MailerCloud's</p>
            <p> Templates & Editor - Get Started!</p>
            <Button className="mt-4 p-3 px-8" name='Choose email template'
              onClick={_ => setShowModal(true)}
            />
          </div>
        </div>



      </div>

      <Modal visible={showModal} onClose={() => setShowModal(false)} />
    </Layout >
  )
}

export default Index
