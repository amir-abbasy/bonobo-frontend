import React from 'react';
import { useState } from 'react'
import { Layout, DropDown, Button, Modal, SearchInput } from '../../components'
import DynamicForm from '../../components/Form';

import Joi from 'joi';
import { SettingIcon, TemplateIcon } from '../../components/Icons';
import Contacts from './Contacts';


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
    name: 'Type',
    label: 'Type',
    options: [
      { value: 'SMTP ', title: 'SMTP' },
      { value: 'API', title: 'API' },
    ],
    validation: Joi.string().required().messages({
      'string.empty': 'Type is required',
    }),
    render: (field) => {
      return <div className='w-full'>
        <label className={`text-gray-600 font-medium  text-sm`}>{field.name}</label>
        <DropDown input={field} data={field.options} onSelect={_ => {
          // console.log({ _ });
        }}
          value={field.value}
        // classNameContainer="w-full"
        />
        <p className='text-red-500 font-normal text-xs mt-1'>{field.error?.message}</p>
      </div>
    },
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
    render: (field) => {
      return <div className='w-full mt-6'>
        <label className={`text-gray-600 font-medium  text-sm`}>{field.name}</label>
        <DropDown input={field} data={field.options} onSelect={_ => {
          // console.log({ _ });
        }}
          value={field.value}
        // classNameContainer="w-full"
        />
        <p className='text-red-500 font-normal text-xs mt-1'>{field.error?.message}</p>
      </div>
    },
  },
];


const sections = ['List type', 'Upload', 'Map', 'Confirm']

function Index() {
  const [options, setOpstion] = useState({ value: 'value', data: [{ title: 'Amir', value: 'amir' }, { title: 'Amir2', value: 'amir2' }] })
  const [activeSection, setActiveSection] = useState(0) // choose_contacts, preview_campaign
  const [showModal, setShowModal] = useState(false)



  // Submit Handler
  const handleFormSubmit = (formValues) => {
    console.log('Form Data:', formValues);
  };

  return (
    <Layout className='pt-8 px-2 sm:px-0  flex flex-col relative pb-32' >
      <div className='flex items-center'>
        <h1 className='font-bold text-2xl my-4'>{sections[activeSection]}</h1>
      </div>

      <div className='flex w-full items-center justify-center text-center sm:gap-x-4 mb-8'>
        {sections.map((section, key) => {
          return <div className='flex items-center cursor-pointer' key={key} onClick={() => setActiveSection(key)}>
            {key > 0 && <div className={`h-[1px] w-12  ${key <= activeSection ? 'bg-brand-primary' : 'bg-gray-300'} `} />}
            <div className={`size-6 mr-4 rounded-full border-[6px]  ${key <= activeSection ? 'bg-white  border-brand-primary' : 'bg-gray-500  border-gray-300'} `} />
            <a className={` font-normal text-sm ${key <= activeSection ? 'text-brand-primary' : 'text-gray-500'}`}>{section}</a>
          </div>
        })}
      </div>






      {sections[activeSection] == sections[0] && <div className='flex flex-col sm:flex-row justify-between'>
        <div className='bg-white rounded-3xl p-6 flex flex-col justify-center items-center flex-1 min-h-[60vh]'>
          <h5 className='font-bold text-xl mb-8'>Add new list</h5>
          <p className=''>Create a new contact list that includes contacts with shared interests. Send personalized emails to the entire list with a click. To learn </p>
          <p>how to do this follow our step-by-step guide or watch our video tutorial.</p>

          <DynamicForm
            data={[
              {
                type: 'text',
                name: 'List Name',
                label: 'List Name',
                validation: Joi.string().required().messages({
                  'string.empty': 'Type is required',
                }),
                className: "p-4"
              },
              {
                type: 'select',
                name: 'Type',
                label: 'Type',
                options: [
                  { value: 'Active', title: 'Active' },
                  { value: 'Bounce', title: 'Bounce' },
                  { value: 'Suppressed', title: 'Suppressed' },
                  { value: 'unsubscribe', title: 'Unsubscribe' },
                  { value: 'spam complaints', title: 'Spam complaints' },
                  { value: 'Abuse', title: 'Abuse' },
                ],
                validation: Joi.string().required().messages({
                  'string.empty': 'Type is required',
                }),
                render: (field) => {
                  return <div className='w-full'>
                    <label className={`text-gray-600 font-medium  text-sm`}>{field.name}</label>
                    <DropDown input={field} data={field.options} onSelect={_ => {
                      // console.log({ _ });
                    }}
                      value={field.value}
                      // classNameContainer="w-full"
                      className="p-4"
                    />
                    <p className='text-red-500 font-normal text-xs '>{field.error?.message}</p>
                  </div>
                },
              }
            ]}
            onSubmit={handleFormSubmit}
            // itemClassName="border-red-400 bg-brand-background "
            // label={false}
            className="sm:w-1/2 mt-12"
            submitClassName="button-primary w-full"
            submitName="Save & Continue"
          />

        </div>
      </div>}



      {sections[activeSection] == sections[1] && <div className='xl:flex flex-col sm:flex-row justify-between  gap-x-8'>
        <div className='bg-white rounded-3xl p-6 flex flex-col justify-center items-center flex-1 min-h-[60vh]'>
          <h5 className='font-bold text-xl mb-8'>How would you like to import your contacts?</h5>
          <p className=''>Not sure how to format your file? Learn how</p>

          <div className='flex flex-col sm:flex-row text-center justify-center  gap-x-8 px-4 sm:px-32'>
            {[{
              name: 'Upload', desc: 'Upload a .CSV file from your PC/Device ', icon: 'https://img.icons8.com/?size=80&id=7HIvjaqEpuhq&format=png',
              button: 'Start an Upload'
            },
            {
              name: 'Copy and paste ', desc: 'Simply copy and paste the contacts ', icon: 'https://img.icons8.com/?size=80&id=QfmxGpnj0cA8&format=png',
              button: 'Copy and paste'
            },
            {
              name: 'Add individual contacts ', desc: 'Add individual contacts one-by-one ', icon: 'https://img.icons8.com/?size=64&id=vUrsmTHgHKwZ&format=png',
              button: 'Add now'
            }].map((option, key) => {
              return <div className='flex flex-col items-center cursor-pointer my-4 border rounded-3xl p-10  bg-slate-50 hover:border-brand-primary hover:bg-slate-200'>
                <img src={option.icon} className='h-12 opacity-20' />
                <p className='font-semibold text-lg my-4'>{option.name}</p>
                <p className=' text-slate-800 w-44 my-4'>{option.desc}</p>
                <Button className='mt-4 text-white' name={option.button} />
              </div>
            })}
          </div>

        </div>


      </div>}


      {sections[activeSection] == sections[2] && <div className='bg-white rounded-3xl p-4 sm:p-16 flex flex-col min-h-[60vh]'>
        <h5 className='font-bold text-xl mb-8'>Add Tag</h5>
        <p className=''>Organize your contacts with our contact tagging feature. Use words or phrases that make sense to you to label or categorize your contacts based on shared characteristics or behaviours.</p>

        <h5 className='font-bold text-xl mb-8'>Match column label to contact information</h5>
        <p className=''>Map each column header below to a corresponding contact attribute. Some headers may already be mapped based on their names, but any unmapped headers can be manually assigned to an attribute using the dropdown menu.</p>

        <Contacts />
      </div>}





      <div className='bg-white  p-4 sm:p-8 rounded-t-3xl flex justify-between fixed bottom-0 right-0 left-0 mx-0 sm:mx-44'>
        <Button className="p-3 px-8 bg-none hover:bg-slate-200 text-slate-600 border" name='Cancel'
          onClick={_ => {
            if (activeSection == 0) return
            setActiveSection(activeSection - 1)
          }}
        />
        <Button className="p-3 px-8 text-white" name='Save & Continue'
          onClick={_ => {
            if (activeSection < sections.length - 1) {
              setActiveSection(activeSection + 1)
            }
          }}
        />
      </div>







      <Modal visible={showModal} onClose={() => setShowModal(false)} >
        <section className='p-8 '>
          <div class="text-center">
            <h3 className='text-2xl font-normal'> Choose Your Template, Craft Your Creation </h3>
            <p className='my-4 text-slate-800'> Choose the perfect option to create campaign that generate more leads, attract more <br />subscribers, and make more sales.</p>
          </div>

          <div className='flex flex-col sm:flex-row text-center justify-center  gap-x-8 px-4 sm:px-32'>
            {[{ name: 'Template Gallery', desc: 'Choose from ready to use templates', icon: 'https://app2.mailercloud.com/img/template-gallery.455c3d23.svg' },
            { name: 'Richtext Editor', desc: 'Create simple emails Effortlessly', icon: 'https://app2.mailercloud.com/img/richtext-editor.2b2c95c8.svg' },
            { name: 'Drag & Drop Builder', desc: 'Create a campaign by simple drag and drop', icon: 'https://app2.mailercloud.com/img/drag-drop-builder.5dc38ce3.svg' }].map((option, key) => {
              return <div className='flex flex-col items-center cursor-pointer '>
                <div className='my-4 border rounded-3xl p-10 size-44 hover:bg-slate-100' >
                  <img src={option.icon} />
                </div>
                <p className='font-semibold text-lg'>{option.name}</p>
                <p className='text-sm text-slate-800 w-44'>{option.desc}</p>
              </div>
            })}
          </div>

          <Button className="bg-none border text-slate-600 hover:bg-slate-200" name="Cancel" onClick={() => setShowModal(false)} />
        </section>
      </Modal>


    </Layout >
  )
}

export default Index
