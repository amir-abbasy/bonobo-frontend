import React from 'react'

import { useState } from 'react'
import { Layout, DropDown, Button } from '../../components'
import DynamicForm from '../../components/Form';
import HeroCard from './HeroCard'
import Joi from 'joi';


const formData = [
    // {
    //     type: 'text',
    //     name: 'username',
    //     label: 'Username',
    //     validation: Joi.string().min(3).max(30).required().messages({
    //         'string.empty': 'Username is required',
    //         'string.min': 'Username must be at least 3 characters long',
    //         'string.max': 'Username must be at most 30 characters long',
    //     }),
    //     layout: 'row',
    //     className: "",
    //     containerClass: "",
    //     // showLabel: false
    // },
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
        type: 'password',
        name: 'password',
        label: 'Password',
        validation: Joi.string().min(6).required().messages({
            'string.empty': 'Password is required',
            'string.min': 'Password must be at least 6 characters long',
        }),
    },

];

function login() {
    const [options, setOpstion] = useState()

    const handleFormSubmit = (formValues) => {
        console.log('Form Data:', formValues);
    };

    return (
        <div className='flex  h-screen items-center'>
            <HeroCard />
            <div className='flex-1 sm:bg-transparent flex justify-center items-center flex-col h-full'>
                <img src="./logo-main.svg" className="sm:hidden w-44" alt="" />

                <div className='text-center'>
                    <h3 className='font-bold text-3xl my-8'>Welcome back</h3>
                    <p>Log in to your account.</p>
                    <p>Don't have an account?
                        <a className='font-semibold ml-2 cursor-pointer' href="/signup">Sign up</a>
                    </p>
                </div>
                <div className='bg-red-50s0 w-full px-12 xl:px-32 2xl:p-0 2xl:w-[20vw]'>
                    <DynamicForm
                        data={formData}
                        onSubmit={handleFormSubmit}
                        // itemClassName="border-red-400 bg-brand-background "
                        // label={false}
                        className="space-between  my-24 bg-transparent mb-4 w-full"
                        submitClassName="button-primary w-full"
                        // submitContainerclassName="justify-start"
                        submitName="Login"
                    />
                     <div className='w-full '>
                        <a href="/forgot-password" className='font-normal text-slate-700 text-sm'>Forgot your password?</a>
                    </div>
                </div>
                <a href="" className='text-slate-400 font-normal text-sm my-12'>Privacy & Terms of Service</a>

            </div>
        </div >
    )
}

export default login