"use client"

import { useState } from "react"

export default function PropertyFilter({ filters, onFilterChange }) {
  const [localFilters, setLocalFilters] = useState(filters)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    const updatedFilters = { ...localFilters }

    if (name === "minPrice" || name === "maxPrice") {
      const priceRange = [...localFilters.priceRange]
      if (name === "minPrice") {
        priceRange[0] = Number.parseInt(value) || 0
      } else {
        priceRange[1] = Number.parseInt(value) || 10000000
      }
      updatedFilters.priceRange = priceRange
    } else {
      updatedFilters[name] = value
    }

    setLocalFilters(updatedFilters)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onFilterChange(localFilters)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">Filter Properties</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={localFilters.priceRange[0]}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Min Price"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={localFilters.priceRange[1]}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Max Price"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
            <select
              name="bedrooms"
              value={localFilters.bedrooms}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="any">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <select
              name="propertyType"
              value={localFilters.propertyType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="any">Any</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
        >
          Apply Filters
        </button>
      </form>
    </div>
  )
}
