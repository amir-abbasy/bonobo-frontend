import React from 'react';
import { useState } from 'react'
import { Layout, DropDown, Button } from '../../components'
import DynamicForm from '../../components/Form';

import Joi from 'joi';


const formData = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    validation: Joi.string().min(3).max(30).required().messages({
      'string.empty': 'Username is required',
      'string.min': 'Username must be at least 3 characters long',
      'string.max': 'Username must be at most 30 characters long',
    }),
    layout: 'row',
    className: "",
    containerClass: "",
    // showLabel: false

  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    validation: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
    layout: 'row',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    validation: Joi.string().min(6).required().messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters long',
    }),
    // layout: 'row',
  },
  {
    type: 'number',
    name: 'age',
    label: 'Age',
    validation: Joi.number().min(0).max(100).messages({
      'number.base': 'Age must be a number',
      'number.min': 'Age must be at least 0',
      'number.max': 'Age cannot be more than 100',
    }),
  },
  {
    type: 'date',
    name: 'birthdate',
    label: 'Birthdate',
    validation: Joi.date().required().messages({
      'date.base': 'Birthdate must be a valid date',
      'any.required': 'Birthdate is required',
    }),
  },
  {
    type: 'time',
    name: 'preferredTime',
    label: 'Preferred Time',
  },
  {
    type: 'datetime-local',
    name: 'appointment',
    label: 'Appointment',
  },
  {
    type: 'month',
    name: 'birthMonth',
    label: 'Birth Month',
  },
  {
    type: 'week',
    name: 'birthWeek',
    label: 'Birth Week',
  },
  {
    type: 'url',
    name: 'website',
    label: 'Website',
    validation: Joi.string().uri().messages({
      'string.uri': 'Must be a valid URL',
    }),
  },
  {
    type: 'tel',
    name: 'phone',
    label: 'Phone Number',
    validation: Joi.string().pattern(/^[0-9]{10}$/).messages({
      'string.pattern.base': 'Phone number must be 10 digits',
    }),
    layout: 'row'
  },
  {
    type: 'search',
    name: 'search',
    label: 'Search',
    layout: 'row'
  },
  // {
  //     type: 'color',
  //     name: 'favoriteColor',
  //     label: 'Favorite Color',
  // },
  {
    type: 'range',
    name: 'volume',
    label: 'Volume',
    min: 0,
    max: 100,
  },
  {
    type: 'file',
    name: 'resume',
    label: 'Upload Resume',
  },
  {
    type: 'checkbox',
    name: 'terms',
    label: 'Agree to Terms',
    validation: Joi.boolean().valid(true).required().messages({
      'any.only': 'You must agree to the terms',
    }),
  },
  {
    type: 'radio',
    name: 'gender',
    label: 'Gender',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    validation: Joi.string().valid('male', 'female').required().messages({
      'any.only': 'Gender is required',
    }),
  },
  {
    type: 'select',
    name: 'country',
    label: 'Country',
    options: [
      { value: 'usa', label: 'United States' },
      { value: 'canada', label: 'Canada' },
    ],
    validation: Joi.string().required().messages({
      'string.empty': 'Country is required',
    }),
  },
  {
    type: 'textarea',
    name: 'bio',
    label: 'Bio',
    validation: Joi.string().max(500).messages({
      'string.max': 'Bio must be less than 500 characters',
    }),
  },
  {
    type: 'submit',
    value: 'Submit',
  },
];


function Index() {
  const [options, setOpstion] = useState({ value: 'value', data: [{ title: 'Amir', value: 'amir' }, { title: 'Amir2', value: 'amir2' }] })
  // Submit Handler
  const handleFormSubmit = (formValues) => {
    console.log('Form Data:', formValues);
  };
  return (
    <Layout className='pt-8'>
      <h1 className='font-bold text-2xl mb-4'>Autoresponder</h1>

      <div className='bg-white rounded-3xl p-8'>
        {/*   <DropDown
            // title="Chhose crypto token"
            data={options.data}
            value={options.value}
            placeholder="Select Currency"
            onSelect={(value) => setOpstion(_ => ({ ..._, value }))}
            renderItem={(item) => <div>
              <p className='text-xl'>{item.title}</p>
              <p className='text'>$0.33</p>
            </div>}
            classNameContainer="mt-4 "
          />

        <Button className={'mb-12'} /> */}

        <DynamicForm
          data={formData}
          onSubmit={handleFormSubmit}
        // itemClassName="border-red-400 bg-brand-background "
        // label={false}
        // containerClass="w-full"
        // className="space-between"
        />


      </div>
    </Layout>
  )
}

export default Index
