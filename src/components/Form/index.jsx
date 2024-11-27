import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { twMerge } from 'tailwind-merge'

////////////  Author /////////////////

// https://github.com/amir-abbasy

/////////////////////////////////////

// DynamicForm Component
const DynamicForm = ({ data, onSubmit, itemClassName, containerClass: globalContainerClass, label: showLabel, labelClassName, submitClassName, className: globalClassName, submitName = 'submit', submitButton }) => {
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
        control
    } = useForm({
        resolver: joiResolver(validationSchema),
        mode: 'onChange', // Enable real-time validation
    });

    const handleFormSubmit = (formData) => {
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={twMerge(`w-full flex-wrap gap-x-4 bg-white dark_:bg-black rounded-md`, globalClassName)}>
            {data.map((field, index) => {
                const { type, name, label, render, options, className, containerClass, showLabel: f_showLabel, layout, ...rest } = field;

                // Ensure field has a name, otherwise skip rendering.
                if (!name) return null;
                if (render) {
                    let _field = { ...field, register: register, error: errors[name] }
                    // return render?.(_field)
                    return <>

                        <Controller
                            name={field.name}
                            control={control}
                            render={({ field: field_control }) => <>
                                <input className='hidden' value={field_control.value} {...field_control} />
                                {render?.({ ..._field, ...field_control })}
                            </>}
                        />
                    </>

                }

                return (
                    <div key={index} className={twMerge(`${layout == 'row' ? ' flex-1 ' : 'w-full'} flex flex-col space-y-1 mb-5`, globalContainerClass, containerClass)}>
                        {(showLabel == false) ? null : <label className={twMerge(`text-gray-600 font-medium  text-sm  ${labelClassName}`)}>{f_showLabel == false ? '' : (label || name)}</label>}

                        {/* Render input based on type */}
                        {type === 'select' ? (
                            <select
                                {...register(name)}
                                {...rest}
                                className={twMerge(`border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`)}
                            >
                                {options?.map((option, optIndex) => (
                                    <option key={optIndex} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
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
                                        className={twMerge(`form-radio text-blue-600 mr-2 ${className}`)}
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

            <div className='w-full flex justify-end'
                onClick={submitButton ? handleSubmit(handleFormSubmit) : null}
                type="submit"
            >
                {submitButton ? submitButton?.() : <button
                    type="submit"
                    className={twMerge(`w-full bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors`, submitClassName)}
                >
                    {submitName}
                </button>}
            </div>

        </form>
    );
};


export default DynamicForm;