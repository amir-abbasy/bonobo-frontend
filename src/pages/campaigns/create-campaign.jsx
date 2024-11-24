import React from 'react';
import { useState } from 'react'
import { Layout, DropDown, Button, Modal, SearchInput } from '../../components'
import DynamicForm from '../../components/Form';

import Joi from 'joi';
import { SettingIcon, TemplateIcon } from '../../components/Icons';


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


const sections = ['Create campaign', 'Choose contacts', 'Preview campaign']

function Index() {
  const [options, setOpstion] = useState({ value: 'value', data: [{ title: 'Amir', value: 'amir' }, { title: 'Amir2', value: 'amir2' }] })
  const [activeSection, setActiveSection] = useState(0) // choose_contacts, preview_campaign
  const [showModal, setShowModal] = useState(false)



  // Submit Handler
  const handleFormSubmit = (formValues) => {
    console.log('Form Data:', formValues);
  };

  return (
    <Layout className='pt-8 px-2 sm:px-0 flex flex-col sm:pb-32 relative' >
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
        <div className='bg-white w-full rounded-3xl p-6 sm:flex-[.5]'>
          <DynamicForm
            data={formData}
            onSubmit={handleFormSubmit}
            // itemClassName="border-red-400 bg-brand-background "
            // label={false}
            className="w-full"
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
          <div className='flex flex-col justify-center items-center my-16'>
            <img src="https://app2.mailercloud.com/img/email-content.806ec997.svg" className='m-auto w-64 mt-auto' />
            <h5 className='font-bold text-xl my-4'>Add Email Content</h5>
            <p className=''>Create Engaging Email Content with MailerCloud's</p>
            <p> Templates & Editor - Get Started!</p>
            <Button className="mt-4 p-3 px-8 text-white" name='Choose email template'
              onClick={_ => setShowModal(true)}
            />
          </div>
        </div>



      </div>}



      {sections[activeSection] == sections[1] && <div className='xl:flex flex-col sm:flex-row justify-between  gap-x-8'>
        <div className='flex-1'>
          <div className='flex justify-between '> <div className='flex justify-between gap-x-4'> <Button name='Contact Lists' /> <Button name='Segments' className='bg-none border border-slate-300 hover:bg-slate-300' /></div> <SearchInput /></div>

          <p className='my-6'><span className='font-semibold'>6</span> lists, <span className='font-semibold'>46</span> Contacts</p>



          <div className='grid grid-cols-2 bg-white rounded-3xl p-8 '>
            {new Array(8).fill("*").map((item, key) => {
              return <div class="flex items-center mb-4 " key={key}>
                <input id={`list-checkbox_${key}`} type="checkbox" value="" className="checkbox" />
                <label for={`list-checkbox_${key}`} class="ms-2 text-lg font-light text-gray-900 _dark:text-gray-300">List 213(74)</label>
              </div>
            })}
          </div>
        </div>


        <div className='flex-1'>

          {/* Rules */}
          <div className='flex flex-col bg-white rounded-3xl p-8 mt-8 xl:mt-0 '>
            <div className='flex items-center mb-4'>
              <SettingIcon />
              <h6 className='ml-2 font-semibold text-xl'>Rules</h6>
            </div>
            <span className='flex items-center mt-4'>A. Send emails to
              <span>
                <DropDown data={[
                  { value: 'first', title: 'first' },
                  { value: 'last', title: 'last' },
                ]}
                  value={'first'}
                  className="w-fit mx-4 border-0 border-b px-4 py-0 rounded-none text-center hover:border-brand-primary font-semibold "
                />
              </span>
              <input className='w-20 outline-none border-b mx-4 text-center hover:border-brand-primary' value={'10,000'} /> contacts
            </span>



            <span className='flex items-center mt-6'>B. Send emails to
              <input className='w-10 outline-none border-b mx-4 text-center hover:border-brand-primary' value={'20'} />
              % of the subscribers, Pause the campaign if</span>



            <span className='flex items-center mt-4'>
              <span>
                <DropDown data={[
                  { value: 'open_rate', title: 'Open rate' },
                  { value: 'click_rate', title: 'Click rate' },
                ]}
                  value={'open_rate'}
                  className="w-fit mx-4 border-0 border-b px-4 py-0 rounded-none text-center hover:border-brand-primary font-semibold "
                />
              </span>
              <p>is</p>
              <span>
                <DropDown data={[
                  { value: 'gt', title: 'greater than' },
                  { value: 'lt', title: 'Less than' },
                ]}
                  value={'gt'}
                  className="w-fit mx-4 border-0 border-b px-4 py-0 rounded-none text-center hover:border-brand-primary font-semibold "
                />
              </span>
              <input className='w-10 outline-none border-b mx-4 text-center hover:border-brand-primary' value={'20'} />
              <p> % after</p>
              <input className='w-20 outline-none border-b mx-4 text-center hover:border-brand-primary' placeholder='00:00' />
              <span>
                <DropDown data={[
                  { value: 'minitue', title: 'Minutes' },
                  { value: 'hour', title: 'Houres' },
                  { value: 'day', title: 'Days' },
                ]}
                  value={'minitue'}
                  className="w-fit mx-4 border-0 border-b px-4 py-0 rounded-none text-center hover:border-brand-primary font-semibold "
                />
              </span>
            </span>
          </div>


          {/* Template review */}
          <div className='flex flex-col bg-white rounded-3xl p-8 mt-8  '>
            <div className='flex items-center mb-4'>
              <TemplateIcon />
              <h6 className='ml-2 font-semibold text-xl'>Template review</h6>
            </div>

            <div className='flex justify-between w-1/2 mt-8'>
              <p>Broken links</p> <p className='bg-brand-background px-4 rounded-lg font-semibold'>0</p>
            </div>

            <div className='flex justify-between w-1/2 mt-8'>
              <p>Blacklisted domains</p> <p className='bg-brand-background px-4 rounded-lg font-semibold '>0</p>
            </div>

          </div>
        </div>

      </div>}


      {sections[activeSection] == sections[2] && <div className='bg-white rounded-3xl  p-6'>

        <div className='px-8 sm:px-32 bg-brand-background   py-4 '>
          <p className='font-bold'>Subject line <span className='font-normal ml-2'>asdasd</span></p>
          <p className='font-bold'>From <span className='font-normal ml-2'>Cordispatch Software business@cordispatch.com</span></p>
          <p className='font-bold'>Preview text <span className='font-normal ml-2'>asdasd</span></p>
        </div>

        <div className='px-8 sm:px-32 bg-brand-background mt-6 py-4 '>
          <p className='font-semibold'>
            Hey {`{{name}}`},
          </p>
          <br />
          <br />
          <br />
          <p>This is just an email example showing how plain is "plain text" email.</p>
          <p>it doesn't include any images.</p>
          <br />
          <p>Truly just plain text.</p>
          <br />
          <br />
          <br />
          <p>Have a great day,</p>
          <p>Emilie</p>
          <p>from team mailercloud</p>
        </div>



        <div className='px-8 sm:px-32 bg-brand-background mt-6 py-4 '>
          <div className='flex items-center mb-4'>
            <SettingIcon />
            <h6 className='ml-2 font-semibold text-xl'>Rules</h6>
          </div>
          <p className='my-6'><span className='font-semibold'>6</span> lists, <span className='font-semibold'>46</span> Contacts</p>
        </div>

        <div className='px-8 sm:px-32 bg-brand-background mt-6 py-4 '>
          <div className='flex items-center mb-4'>
            <TemplateIcon />
            <h6 className='ml-2 font-semibold text-xl'>Template review</h6>
          </div>
          <p className='my-6'><span className='font-semibold'>6</span> lists, <span className='font-semibold'>46</span> Contacts</p>
        </div>




      </div>}





      <div className='bg-white p-8 rounded-t-3xl flex justify-between fixed bottom-0 right-0 left-0 mx-4 sm:mx-44'>
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
