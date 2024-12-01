import React from 'react'

import { useState } from 'react'
import { Layout, DropDown, Button } from '../../components'
import DynamicForm from '../../components/Form';
import HeroCard from './HeroCard'
import Joi from 'joi';

function signup() {
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
                    <h3 className='font-bold text-3xl my-8'>Reset your password</h3>
                    <p>We'll email you instructions to reset your password.</p>
                </div>
                <div className='bg-red-50s0 w-full px-12 xl:px-32 2xl:p-0 2xl:w-[20vw]'>
                    <DynamicForm
                        data={[{
                            type: 'email',
                            name: 'email',
                            label: 'Email',
                            validation: Joi.string().email({ tlds: { allow: false } }).required().messages({
                                'string.empty': 'Email is required',
                                'string.email': 'Email must be a valid email address',
                            }),
                        }]}
                        onSubmit={handleFormSubmit}
                        // itemClassName="border-red-400 bg-brand-background "
                        // label={false}
                        className="space-between  my-24 bg-transparent mb-4 w-full"
                        submitClassName="button-primary w-full"
                        // submitContainerclassName="justify-start"
                        submitName="Reset Password"
                    />
                    <div className='w-full '>
                        <a href="/login" className='font-normal text-slate-700 text-sm'>Return to login</a>
                    </div>
                </div>
                <p className='text-slate-400 font-normal text-sm my-12'>By signing up, you agree to our <a href=''>Terms & Conditions</a> and <a href=''>Privacy Policy</a></p>

            </div>
        </div >
    )
}

export default signup