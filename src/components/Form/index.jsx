import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { twMerge } from 'tailwind-merge'
import DropDown from './DropDown';


// DynamicForm Component
const DynamicForm = ({ data, onSubmit, className, itemClassName, containerClass, label: showLabel, labelClassName, submitClassName, submitName = 'submit' }) => {
    // Dynamically create the Joi validation schema based on formData
    const validationSchema = Joi.object(
        data.reduce((schema, field) => {
            const { name, validation } = field;
            if (name && validation) {
                schema[name] = validation;
            }
            return schema;
        }, {})
    );

    // Initialize the form with react-hook-form and Joi validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(validationSchema),
        mode: 'onChange', // Enable real-time validation
    });

    const handleFormSubmit = (formData) => {
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={twMerge(`w-full flex justify-between flex-wrap max-w-lg gap-x-4 dark_:bg-black rounded-md ${className}`)}>
            {data.map((field, index) => {
                const { type, name, label, options, className, containerClass: f_containerClass, showLabel: f_showLabel, layout, ...rest } = field;

                // Ensure field has a name, otherwise skip rendering.
                if (!name) return null;


                return (
                    <div key={index} className={twMerge(`${layout == 'row' ? ' flex-1 ' : 'w-full'} flex flex-col space-y-1 mb-5 ${containerClass ?? ''} ${f_containerClass ?? ''}`)}>
                        {(showLabel == false) ? null : <label className={twMerge(`text-gray-600 font-medium  text-sm  ${labelClassName}`)}>{f_showLabel == false ? '' : (label || name)}</label>}

                        {/* Render input based on type */}
                        {type === 'select' ? (
                            <DropDown
                                // {...register(name)}
                                {...rest}
                                data={options}
                            // className=""
                            />
                            // <select
                            //     {...register(name)}
                            //     {...rest}
                            //     className={twMerge(`border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`)}
                            // >
                            //     {options?.map((option, optIndex) => (
                            //         <option key={optIndex} value={option.value}>
                            //             {option.label}
                            //         </option>
                            //     ))}
                            // </select>
                        ) : type === 'textarea' ? (
                            <textarea
                                {...register(name)}
                                {...rest}
                                className={twMerge(`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`)}
                            ></textarea>
                        ) : type === 'radio' ? (
                            options?.map((option, optIndex) => (
                                <label key={optIndex} className={twMerge(`inline-flex items-center space-x-2 ${className}`)}>
                                    <input
                                        type="radio"
                                        value={option.value}
                                        {...register(name)}
                                        {...rest}
                                        className={twMerge(`form-radio text-blue-600 ${className}`)}
                                    />
                                    {option.label}
                                </label>
                            ))
                        ) : type === 'checkbox' ? (
                            <input
                                type="checkbox"
                                {...register(name)}
                                {...rest}
                                className={twMerge(`form-checkbox text-blue-600 ${className}`)}
                            />
                        ) : (
                            <input
                                type={type}
                                {...register(name)}
                                {...rest}
                                className={twMerge(`w-full my-8 rounded-xl px-3 py-2 outline-none border border-brand-background hover:border-brand-primary focus:border-brand-primary placeholder:text-xs transition-all duration-200 ${className}`)}
                            />
                        )}

                        {/* Show validation errors */}
                        {errors[name] && (
                            <span className={twMerge(`text-red-500 font-normal text-xs mt-1 ${className}`)}>{errors[name].message}</span>
                        )}
                    </div>
                );
            })}

            <button
                type="submit"
                className={twMerge(`w-full bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${submitClassName}`)}
            >
                {submitName}
            </button>
        </form>
    );
};


export default DynamicForm;