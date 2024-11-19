import React from 'react'

function Tabs() {
    return (
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 _dark:border-gray-700 _dark:text-gray-400">
            <li class="me-2">
                <a href="#" aria-current="page" class="inline-block p-4 text-brand-primary bg-gray-100 rounded-t-lg active _dark:bg-gray-800 _dark:text-blue-500">Overview</a>
            </li>
            <li class="me-2">
                <a href="#" class="inline-block p-4 rounded-t-lg text-gray-600 hover:bg-gray-50 _dark:hover:bg-gray-800 _dark:hover:text-gray-300">Contacts</a>
            </li>
            {/* <li>
                <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed _dark:text-gray-500">Disabled</a>
            </li> */}
        </ul>

    )
}

export default Tabs