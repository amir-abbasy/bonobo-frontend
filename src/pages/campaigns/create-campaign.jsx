import React from 'react';
import { useState } from 'react'
import { Layout, DropDown, Button } from '../../components'
import DynamicForm from '../../components/Form';
import ses from '../../assets/Icons/ses.svg';

import Joi from 'joi';




//
// 
// 
// 
// 
// 



const formData = [
  {
    type: 'text',
    name: 'SES Name',
    placeholder: 'SES Name',
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
    type: 'email',
    name: 'Access Key',
    label: 'Access Key',
    placeholder: 'SES Name',

    validation: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
    layout: 'row',
  },
  {
    type: 'text',
    name: 'Secret Key',
    label: 'Secret Key',
    placeholder: 'SES Name',
    validation: Joi.string().min(6).required().messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters long',
    }),
    // layout: 'row',
  },
  {
    type: 'text',
    name: 'From Name',
    label: 'From Name',
    placeholder: 'SES Name',
    validation: Joi.number().min(0).max(100).messages({
      'number.base': 'Age must be a number',
      'number.min': 'Age must be at least 0',
      'number.max': 'Age cannot be more than 100',
    }),
  },
  {
    type: 'email',
    name: 'From Email',
    label: 'From Email',
    placeholder: 'SES Name',
    validation: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'date.base': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
  },
  {
    type: 'text',
    name: 'Sending Rate',
    label: 'Sending Rate',
    placeholder: 'SES Name',
    validation: Joi.number().min(0).max(100).messages({
      'number.base': 'Age must be a number',
      'number.min': 'Age must be at least 0',
      'number.max': 'Age cannot be more than 100',
    }),

  },
  {
    type: 'text',
    name: 'SMTP Limit',
    label: 'SMTP Limit',
    placeholder: 'SES Name',
    validation: Joi.number().min(0).max(100).messages({
      'number.base': 'Age must be a number',
      'number.min': 'Age must be at least 0',
      'number.max': 'Age cannot be more than 100',
    }),

  },

];


const sections = ['Create campaign', 'Choose contacts', 'Preview campaign']

function Index() {
  const [options, setOpstion] = useState({ value: 'value', data: [{ title: 'Amir', value: 'amir' }, { title: 'Amir2', value: 'amir2' }] })
  const [activeSection, setActiveSection] = useState('Create campaign') // choose_contacts, preview_campaign
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
            submitName="Save SES Details"
          />

        </div>


        <div className='bg-gradient-to-t from-white rounded-3xl p-6 flex flex-col flex-1 ml-6'>
          <div className='border p-4 rounded-2xl border-brand-primary'>
            <p className='font-bold'>Subject line <span className='font-normal ml-2'>asdasd</span></p>
            <p className='font-bold'>From <span className='font-normal ml-2'>Cordispatch Software business@cordispatch.com</span></p>
            <p className='font-bold'>Preview text <span className='font-normal ml-2'>asdasd</span></p>
          </div>
          <img src="https://app2.mailercloud.com/img/email-content.806ec997.svg" className='m-auto w-64 mt-auto' />
        </div>



      </div>
    </Layout>
  )
}

export default Index
