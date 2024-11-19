import React from 'react'
import Button from './Button'

function Modal({ visible = false, onClose = _ => null }) {
    if (!visible) return
    return (
        <div id="default-modal" tabindex="-1" aria-hidden="true" className='w-screen h-screen flex justify-center items-center absolute left-0 top-0 bg-black/20 z-50'>
            <div class="relative p-4  max-h-full">
                {/* Modal content */}
                <div class="relative bg-white rounded-3xl shadow _dark:bg-gray-7000">
                    {/* Modal header */}
                    <div class="flex items-center justify-between p-4 md:p-5  rounded-t _dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-slate-700 _dark:text-white">
                            Choose template
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center _dark:hover:bg-gray-600 _dark:hover:text-white" data-modal-hide="default-modal"
                            onClick={onClose}
                        >
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <section className='p-8 '>
                        <div class="text-center">
                            <h3 className='text-2xl font-normal'> Choose Your Template, Craft Your Creation </h3>
                            <p className='my-4 text-slate-800'> Choose the perfect option to create campaign that generate more leads, attract more <br />subscribers, and make more sales.</p>
                        </div>

                        <div className='flex text-center justify-center  gap-x-8 px-32'>
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



                        <Button className="bg-none border text-slate-600 hover:bg-slate-200" name="Cancel" onClick={onClose} />


                    </section>

                </div>
            </div>
        </div>
    )
}

export default Modal