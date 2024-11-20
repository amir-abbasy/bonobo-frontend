import React from 'react'
import Button from './Button'

function Modal({ children, title = "Choose template", visible = false, onClose = _ => null }) {
    if (!visible) return
    return (
        <div id="default-modal" tabindex="-1" aria-hidden="true" className='w-screen h-screen flex justify-center items-center absolute left-0 top-0 bg-black/20 z-50'>
            <div class="relative p-4  max-h-full">
                {/* Modal content */}
                <div class="relative bg-white rounded-3xl shadow _dark:bg-gray-7000">
                    {/* Modal header */}
                    <div class="flex items-center justify-between p-4 md:p-5  rounded-t _dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-slate-700 _dark:text-white">
                            {title}
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

                    {children}

                </div>
            </div>
        </div>
    )
}

export default Modal