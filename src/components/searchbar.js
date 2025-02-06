"use client"

import { useState } from "react"
import { FaSearch } from "react-icons/fa"

const SearchSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setIsOpen(false)
  }

  const handleSearch = () => {
    console.log(`Searching for: "${searchTerm}" in "${selectedCategory}"`)
    setResults([`Result 1 in ${selectedCategory}`, `Result 2 in ${selectedCategory}`])
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        
        {/* Custom Category Dropdown */}
        <div className="relative">
          <button
            className="px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 w-64"
            onClick={toggleDropdown}
          >
            {selectedCategory || "Select a Category"}
          </button>
          {isOpen && (
            <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Association")}>Association</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Solidarity")}>Solidarity</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Education")}>Education</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Environment")}>Environment</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Health")}>Health</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Event")}>Event</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Birthday")}>Birthday</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Farewell")}>Farewell</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Wedding")}>Wedding</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Travel")}>Travel</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Shared Gift")}>Shared Gift</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Party")}>Party</li>
              <li className="px-4 py-3 cursor-pointer hover:bg-blue-100" onClick={() => handleCategoryChange("Other")}>Other</li>
            </ul>
          )}
        </div>

        {/* Search Input */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for a fund..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 w-64"
          />
          
          {/* Search Button */}
          <button
            className="px-4 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition duration-300"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Display search results */}
      <div className="mt-6 max-w-lg w-full text-center">
        {results.length > 0 ? (
          <ul className="space-y-2 text-gray-800">
            {results.map((result, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No results found</p>
        )}
      </div>
    </div>
  )
}

export default SearchSection
