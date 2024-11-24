import React from 'react'
import { SearchIcon } from './Icons'

function SearchInput() {
  return (
    <div className="relative sm:max-w-sm  ">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-brand-primary focus:border-brand-primary"
      />

      {/* Search Icon */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <SearchIcon w='20' h='20' className='' />
      </div>

    </div>
  )
}

export default SearchInput