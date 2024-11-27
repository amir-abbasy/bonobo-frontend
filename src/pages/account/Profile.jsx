import React from 'react';
import { useState } from 'react'
import { Layout, DropDown, Button } from '../../components'
import DynamicForm from '../../components/Form';

import Joi from 'joi';
import { UsersIcon } from '../../components/Icons';


const formData = [
    {
        type: 'text',
        name: 'username',
        label: 'First Name',
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

    const user = {
        name: "Maadan"
    }
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-center mb-12 mt-8'>
                <div className='size-9 bg-gradient-to-r from-brand-dark to-brand-primary rounded-full text-white flex '>
                    <p className='m-auto'>{user?.name?.[0]}</p>
                </div>
                <h1 className='font-medium text-2xl ml-4'>Profile</h1>
            </div>

            <div className='bg-white rounded-3xl'>
                <DynamicForm
                    data={formData}
                    onSubmit={handleFormSubmit}
                // itemClassName="border-red-400 bg-brand-background "
                // label={false}
                // containerClass="w-full"
                // className="space-between"
                />
            </div>
        </div>
    )
}

export default Index
