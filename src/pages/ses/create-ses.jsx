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


function Index() {
  const [options, setOpstion] = useState({ value: 'value', data: [{ title: 'Amir', value: 'amir' }, { title: 'Amir2', value: 'amir2' }] })
  // Submit Handler
  const handleFormSubmit = (formValues) => {
    console.log('Form Data:', formValues);
  };
  return (
    <Layout className='pt-8' >
      <div className=''>
        <div className='flex items-center'>
          <img alt="" src={ses} />
          <h1 className='font-bold text-2xl m-4'>Amazon SES Configuration</h1>
        </div>

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


      </div>
    </Layout>
  )
}

export default Index
