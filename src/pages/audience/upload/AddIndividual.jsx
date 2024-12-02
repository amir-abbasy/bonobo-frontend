import React, { useState } from 'react'
import DynamicForm from '../../../components/Form'
import Joi from 'joi';
import mock_country from '../../../assets/data/mock_country.json'
import { Button } from '../../../components';
import { PlusIcon } from '../../../components/Icons';



const formData = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    validation: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
  },
  {
    type: 'text',
    name: 'First Name',
    label: 'First Name',
    validation: Joi.string().min(3).max(30).required().messages({
      'string.empty': 'First Name is required',
      'string.min': 'First Name must be at least 3 characters long',
      'string.max': 'First Name must be at most 30 characters long',
    }),
    // layout: 'row',
    className: "",
    containerClass: "",
    // showLabel: false
  },
  {
    type: 'text',
    name: 'Last Name',
    label: 'Last Name',
    validation: Joi.string().min(3).max(30).required().messages({
      'string.empty': 'Last Name is required',
      'string.min': 'Last Name must be at least 3 characters long',
      'string.max': 'Last Name must be at most 30 characters long',
    }),
    // layout: 'row',
    className: "",
    containerClass: "",
    // showLabel: false
  },
  {
    type: 'tel',
    name: 'phone',
    label: 'Phone Number',
    validation: Joi.string().pattern(/^[0-9]{10}$/).messages({
      'string.pattern.base': 'Phone number must be 10 digits',
    }),
    // layout: 'row'
  },
  {
    type: 'select',
    name: 'Country',
    label: 'Country',
    validation: Joi.string().required().messages({
      'string.empty': 'Country is required',
    }),
    options: mock_country.map(_ => ({ label: _.name, value: _.code }))
  },


];



export default function AddIndividual() {
  const [options, setOpstion] = useState()

  const handleFormSubmit = (formValues) => {
    console.log('Form Data:', formValues);
  };


  return (
    <div className='lg:w-1/2'>
      <h1 className='font-bold text-xl my-4'>Add individual contacts</h1>
      <p className='my-2'>Need help adding your data? Learn here. To subscribe multiple people at once, use our convenient upload option.</p>

      <div className='bg-red-50s0 w-full '>
        <DynamicForm
          data={formData}
          onSubmit={handleFormSubmit}
          // itemClassName="border-red-400 bg-brand-background "
          // label={false}
          className="space-between  bg-transparent mt-10 w-full"
          submitClassName="button-primary w-full invisible"
          // submitContainerclassName="justify-start"
          submitName="Sign Up"
        />
        <Button className='bg-none border text-brand-primary hover:bg-brand-primary/20' name='Add Propery'
          iconLeft={() => <PlusIcon color='#4579ff' w="20" h="20" className='mr-2' />}
        />
      </div>

      <h1 className='font-bold text-xl mt-10 my-4'>Add Tag</h1>
      <p className='my-4'>Organize your contacts with our contact tagging feature. Use words or phrases that make sense to you to label or categorize your contacts based on shared characteristics or behaviours.</p>
      <Button className='bg-none border text-brand-primary mb-10 hover:bg-brand-primary/20' name='Add Tag'
        iconLeft={() => <PlusIcon color='#4579ff' w="20" h="20" className='mr-2' />}
      />

    </div>
  )
}
