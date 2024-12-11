import React from 'react'
import { DropDown, LucideIcon } from '../../../components'

export default function ConditionComponent({ data, onRemove, error }) {
    return <div className='my-8 flex flex-wrap items-center gap-x-4 p-4 rounded-lg border border-dashed justify-between' >
        <LucideIcon name="GripVertical" color={"#ccc"} size="20" />
        <span>
            <DropDown data={
                ["Subscriber status", "Email verified", "Email rating", "Subscriber in portion", "Email address", "Domain", "First name", "Last name", "Contact tag"].map(_ => ({ value: _, title: _ }))
            }
                value={data.val1}
                search={true}
                className="w-full"
                classNameContainer={`min-w-44 ${error && 'border border-red-500 rounded-xl'}`}
            />
        </span>

        <span>
            <DropDown data={
                ["Is", "Is not"].map(_ => ({ value: _, title: _ }))
            }
                value={data.val2}
                className="w-full"
                classNameContainer={`min-w-44 ${error && 'border border-red-500 rounded-xl'}`}
            />
        </span>

        <span>
            <DropDown data={
                ["Equals", "Not Equals", "Starts with", "Contains", "Ends with", "Is empty", "Is not empty"].map(_ => ({ value: _, title: _ }))
            }
                value={data.val3}
                className="w-full"
                classNameContainer={`min-w-44 ${error && 'border border-red-500 rounded-xl'}`}
            />
        </span>

        <button onClick={onRemove}>
            <LucideIcon name="Trash2" color={"#999"} size="20" />
        </button>


    </div>
}
