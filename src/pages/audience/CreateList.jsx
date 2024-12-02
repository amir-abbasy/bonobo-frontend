import React, { useRef } from 'react';
import { useState } from 'react'
import { Layout, DropDown, Button, Modal, SearchInput } from '../../components'
import DynamicForm from '../../components/Form';
import Joi from 'joi';
import Contacts from './Contacts';
import FileUploadSection from './upload/FileUpload'
import CopyPasteSection from './upload/CopyPaste'
import AddIndividualSection from './upload/AddIndividual'
import { CloseIcon, DirectionIcon, PlusIcon } from '../../components/Icons';
import { useNavigate } from 'react-router-dom';


const sections = ['List type', 'Upload', 'Map', 'Confirm']

function Index() {
  const [options, setOpstion] = useState()
  const [activeSection, setActiveSection] = useState(0) // choose_contacts, preview_campaign
  const [uploadSection, setUploadSection] = useState() // upload, copy_pase, individual
  const [showModal, setShowModal] = useState(false)
  const nav = useNavigate()

  const childButtonRef = useRef(null);

  // Submit Handler
  const handleFormSubmit = (formValues) => {
    console.log('Form Data:', formValues);
    // if(valid){
    nextTab()
    // }
  };

  console.log(activeSection);

  const proceed = () => {
    if (activeSection == 0) {
      if (childButtonRef.current) {
        childButtonRef.current.click();
      }
    }

    if (activeSection == 1) {
      if (!uploadSection) return
      nextTab()
    }


    if (activeSection == 2) {
      window.alert('confirm')
    }

  }

  const nextTab = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1)
    }
  }



  return (
    <Layout className='pt-8 px-2 sm:px-0  flex flex-col relative pb-32 bg-white' >





      <div className='flex  items-center justify-between  '>
        <h1 className='font-bold text-2xl my-4 hidden sm:block'>{sections[activeSection]}</h1>

        <div className='flex flex-1 items-center justify-center text-center sm:gap-x-4'>
          {sections.map((section, key) => {
            return <div className='flex flex-col sm:flex-row mr-2 items-center  cursor-pointer  justify-center' key={key} onClick={() => setActiveSection(key)}>
              {key > 0 && <div className={`hidden sm:block h-[1px] sm:w-12  ${key <= activeSection ? 'bg-brand-primary' : 'bg-gray-300'} `} />}
              <div className={`size-4 sm:size-6 sm:mr-4 rounded-full  border-[6px]  ${key <= activeSection ? 'bg-white  border-brand-primary' : 'bg-gray-500  border-gray-300'} `} />
              <a className={`mt-2 sm:mt-0 font-normal text-sm ${key <= activeSection ? 'text-brand-primary' : 'text-gray-500'}`}>{section}</a>
            </div>
          })}
        </div>

        <CloseIcon onClick={() => nav('/audience-lists')} />
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
            submitClassName="invisible" // hides orginal button
            submitName="Save & Continue"
            // submitButton={() => <button onClick={() => handleParentButtonClick()}>Click</button>}
            buttonRef={childButtonRef}
          />

        </div>
      </div>}


      {sections[activeSection] == sections[1] && <div className='xl:flex flex-col sm:flex-row justify-between  gap-x-8'>
        {!uploadSection ? <div className='bg-white rounded-3xl p-6 flex flex-col justify-center items-center flex-1 min-h-[60vh]'>
          <h5 className='font-bold text-xl mb-4'>How would you like to import your contacts?</h5>
          <p className='mb-4'>Not sure how to format your file? Learn how</p>

          <div className='flex flex-col sm:flex-row text-center justify-center  gap-x-8 px-4 sm:px-32'>
            {[{
              name: 'Upload', desc: 'Upload a .CSV file from your PC/Device ', icon: 'https://img.icons8.com/?size=80&id=7HIvjaqEpuhq&format=png',
              button: 'Start an Upload',
              action: 'upload'
            },
            {
              name: 'Copy and paste ', desc: 'Simply copy and paste the contacts ', icon: 'https://img.icons8.com/?size=80&id=QfmxGpnj0cA8&format=png',
              button: 'Copy and paste',
              action: 'copy_pase'
            },
            {
              name: 'Add individual contacts ', desc: 'Add individual contacts one-by-one ', icon: 'https://img.icons8.com/?size=64&id=vUrsmTHgHKwZ&format=png',
              button: 'Add now',
              action: 'individual'
            }].map((option, key) => {
              return <div className='group flex flex-col items-center cursor-pointer my-4 border rounded-3xl p-10  bg-brand-primary/5 hover:border-brand-primary hover:bg-brand-primary/20 transition-all duration-300'>
                <img src={option.icon} className='h-12 opacity-20' />
                <p className='font-semibold text-lg my-4'>{option.name}</p>
                <p className=' text-slate-800 w-44 my-4'>{option.desc}</p>
                <Button className='mt-4 text-white opacity-70 group-hover:opacity-100'
                  name={option.button}
                  onClick={() => setUploadSection(option.action)} />
              </div>
            })}
          </div>

        </div> : <div className='bg-white rounded-3xl p-6 flex flex-col justify-center items-center flex-1 min-h-[60vh]'>
          {uploadSection == "upload" && <FileUploadSection />}
          {uploadSection == "copy_pase" && <CopyPasteSection />}
          {uploadSection == "individual" && <AddIndividualSection />}

        </div>

        }

      </div>}


      {sections[activeSection] == sections[2] && <div className='bg-white rounded-3xl p-4 sm:p-16 flex flex-col min-h-[60vh]'>
        <h5 className='font-bold text-xl mb-4'>Add Tag</h5>
        <p className='text-sm'>Organize your contacts with our contact tagging feature. Use words or phrases that make sense to you to label or categorize your contacts based on shared characteristics or behaviours.</p>
        <Button className='bg-none border text-brand-primary mb-10 my-6' name='Add Tag'
          iconLeft={() => <PlusIcon color='#4579ff' w="20" h="20" className='mr-2' />}
        />

        <h5 className='font-bold text-xl mb-8'>Match column label to contact information</h5>
        <p className='text-sm'>Map each column header below to a corresponding contact attribute. Some headers may already be mapped based on their names, but any unmapped headers can be manually assigned to an attribute using the dropdown menu.</p>

        <Contacts />
      </div>}





      <div className='bg-white  p-4 sm:p-8 rounded-t-3xl flex justify-between fixed bottom-0 right-0 left-0 px-4 sm:px-44 border'>
        <Button className="p-3 px-8 bg-none hover:bg-slate-200 text-slate-600 border" name='Cancel'
          onClick={_ => {
            if (uploadSection) {
              setUploadSection()
              return
            }

            if (activeSection == 0) return
            setActiveSection(activeSection - 1)
          }}
          iconLeft={() => <DirectionIcon color="#444" className='mr-4  -scale-100' />}
        />
        <Button className="p-3 px-8 text-white" name='Save & Continue'
          onClick={_ => proceed()}
          iconRight={() => <DirectionIcon color="white" className='ml-4' />}
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
