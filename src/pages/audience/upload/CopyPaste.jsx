import React from 'react'

export default function CopyPaste() {
  return (
    <div>
      <h1 className='font-bold text-xl my-4'>Copy & paste contacts</h1>

      <textarea 
      placeholder='Email,First name,Country,City'
      className='w-full min-h-60 p-2 flex flex-col justify-center items-center text-lg bg-brand-primary/10 hover:bg-slate-50 
      rounded-xl border-2 border-dashed border-slate-400 outline-none
      focus:border-brand-primary my-4 hover:drop-shadow-2xl transition-all duration-500
      placeholder:text-sm
      '>
        
      
      </textarea>
      <p className='my-4'>Add only one email per line. If you have a string or block of emails, please delete all commas and hit "ENTER" after each email address. You may copy & paste up to 50 email addresses here. To upload a larger list, please use the "Import From File" option.</p>
      <p>Email addresses that are duplicates, unsubscribed or blocked domains are automatically removed.</p>
    </div>
  )
}
