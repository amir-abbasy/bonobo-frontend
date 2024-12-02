import React from 'react'
import { MessageIcon } from '../../../components/Icons'

export default function FileUpload() {
  return (
    <div>
      <h1 className='font-bold text-xl my-4'>Upload your file</h1>
      <p className='my-2'>Before you upload your files below, make sure your file is ready to be imported.</p>

      <div className=' p-16 py-8 flex flex-col justify-center items-center text-center text-lg bg-brand-primary/10 hover:bg-slate-50 rounded-3xl border-2 border-dashed border-slate-400 hover:border-brand-primary my-4 cursor-pointer hover:drop-shadow-2xl transition-all duration-500'>
        <div className='bg-brand-primary/20 rounded-full p-2 mb-8'>
        <MessageIcon w="40" h="40"/>
        </div>
        <p>Drag and Drop or choose a file to upload your contacts. Please upload csv files only.</p>
        <p>Maximum file size is 50 MB. </p>
      </div>
      <p className='my-4'>Email addresses that are duplicates, unsubscribed or blocked domains are automatically removed.</p>
      <p>Download a <a href="" className=''>sample CSV file.</a></p>
    </div>
  )
}
