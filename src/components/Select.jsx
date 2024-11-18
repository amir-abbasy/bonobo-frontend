import React, { useEffect, useRef, useState } from 'react';
import { ArrawIcon, MoreIcon } from './Icons'

function Select({ options = [] }) {
    const [isOpen, setIsOpen] = useState(false);

    const wrapperRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left mx-4 overflow-visible" ref={wrapperRef}>
            {/* Picker (Icon) */}
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-brand-background"
            >
                <MoreIcon className="w-16 h-16 " />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {options.map((option, idx) => {
                            return <a
                                href="#"
                                className={`block font-normal px-4 py-2 text-sm  ${option.value == 'delete' ? 'text-red-400' : 'text-black'} hover:bg-brand-background`}
                            >
                                {option.name}
                            </a>
                        })}


                    </div>
                </div>
            )}
        </div>
    );
}

export default Select