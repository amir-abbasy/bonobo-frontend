import React from 'react';
import { useState } from 'react'
import { Layout, DropDown, Button, Modal } from '../../components'
import DynamicForm from '../../components/Form';

import Joi from 'joi';
import { useParams } from 'react-router-dom';


const formDataAPI = [
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
    type: 'email',
    name: 'Access Key',
    label: 'Access Key',
    placeholder: 'SES Name',

    validation: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
    // layout: 'row',
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


const formDataSMTP = [
  {
    type: 'text',
    name: 'SMTP Name',
    placeholder: 'SMTP Name',
    // label: 'SES Name',
    validation: Joi.string().min(3).max(30).required().messages({
      'string.empty': 'SMTP Name is required',
      'string.min': 'SMTP Name must be at least 3 characters long',
      'string.max': 'SMTP Name must be at most 30 characters long',
    }),
    // layout: 'row',
    className: "",
    containerClass: "",
    // showLabel: false
  },
  {
    type: 'text',
    name: 'SMTP From Name',
    label: 'SMTP From Name',
    placeholder: 'SMTP From Name',
    validation: Joi.string().min(6).required().messages({
      'string.empty': 'SMTP From Name is required',
      'string.min': 'SMTP From Name must be at least 6 characters long',
    }),
    // layout: 'row',
  },
  {
    type: 'email',
    name: 'SMTP From Email ',
    label: 'SMTP From Email ',
    placeholder: 'SMTP From Email',

    validation: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.empty': 'SMTP From Email  is required',
      'string.email': 'SMTP From Email  must be a valid email address',
    }),
    // layout: 'row',
  },
  {
    type: 'text',
    name: 'SMTP Username',
    placeholder: 'SMTP Username',
    // label: 'SES Name',
    validation: Joi.string().min(3).max(30).required().messages({
      'string.empty': 'SMTP Username is required',
      'string.min': 'SMTP Username must be at least 3 characters long',
      'string.max': 'SMTP Username must be at most 30 characters long',
    }),
    // layout: 'row',
    className: "",
    containerClass: "",
    // showLabel: false
  },
  {
    type: 'text',
    name: 'SMTP Password',
    label: 'SMTP Password',
    placeholder: 'SMTP Password',
    validation: Joi.string().min(6).required().messages({
      'string.empty': 'SMTP Password is required',
      'string.min': 'SMTP Password must be at least 6 characters long',
    }),
    // layout: 'row',
  },

  {
    type: 'text',
    name: 'SMTP Port',
    label: 'SMTP Port',
    placeholder: 'SMTP Port',
    validation: Joi.number().min(0).max(4000).messages({
      'number.base': 'SMTP Port must be a number',
      'number.min': 'SMTP Port must be at least 0',
      'number.max': 'SMTP Port cannot be more than 100',
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
  {
    type: 'text',
    name: 'SMTP Limit',
    label: 'SMTP Limit',
    placeholder: 'SMTP Host',
    validation: Joi.number().min(0).max(100).messages({
      'number.base': 'SMTP Limit must be a number',
      'number.min': 'SMTP Limit must be at least 0',
      'number.max': 'SMTP Limit cannot be more than 100',
    }),
  },
  {
    type: 'text',
    name: 'SMTP Timeout in seconds',
    label: 'SMTP Timeout',
    placeholder: 'SMTP Port',
    validation: Joi.number().messages({
      'number.base': 'SMTP Timeout must be a number'
    }),

  },
  {
    type: 'select',
    name: 'SMTP Protocol',
    label: 'SMTP Protocol',
    placeholder: 'SMTP Protocol',
    options: [
      { value: 'TLS ', title: 'TLS' },
      { value: 'SSL ', title: 'SSL' },
      { value: 'Plain ', title: 'Plain' },
    ],
    validation: Joi.string().required().messages({
      'string.empty': 'Sender is required',
    }),
    render: (field) => {
      return <div className='sm:w-[46%]'>
        <label className={`text-gray-600 font-medium text-sm`}>{field.name}</label>
        <DropDown input={field} data={field.options}
          onSelect={_ => {
            // console.log({ _ });
          }}
          value={field.value}
          classNameContainer="w-full"
        />
        <p className='text-red-500 font-normal text-xs mt-1'>{field.error?.message}</p>
      </div>
    },
  },


];


const sections = ['Create campaign', 'Choose contacts', 'Preview campaign']

function Index() {
  const [options, setOpstion] = useState({ value: 'value', data: [{ title: 'Amir', value: 'amir' }, { title: 'Amir2', value: 'amir2' }] })
  const [activeSection, setActiveSection] = useState('Create campaign') // choose_contacts, preview_campaign
  const { type } = useParams()


  // Submit Handler
  const handleFormSubmit = (formValues) => {
    console.log('Form Data:', formValues);
  };

  return (
    <Layout className='pt-8' >
      <div className='flex items-center'>
        <h1 className='font-bold text-2xl my-4'>Add Server</h1>
      </div>

      <div className='flex justify-center'>
        <div className='w-fit rounded-3xl p-6'>
          <DynamicForm
            data={type == 'smtp' ? formDataSMTP : formDataAPI}
            onSubmit={handleFormSubmit}
            // itemClassName="border-red-400 bg-brand-background "
            // label={false}
            className="flex w-full p-8 rounded-3xl justify-between"
            containerClass="sm:w-[46%]"
            // className="space-between"
            submitClassName="button-primary px-8"
            submitName="Save & Continue"
          />

        </div>
      </div>





    </Layout >
  )
}

export default Index
