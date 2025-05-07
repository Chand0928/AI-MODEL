"use client"

import { useState, useEffect } from "react"
import { getAllProperties } from "@/lib/api"
import PropertyCard from "./property-card"
import PropertyFilter from "./property-filter"

export default function PropertyListing() {
  const [properties, setProperties] = useState([])
  const [filteredProperties, setFilteredProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    priceRange: [0, 5000000],
    bedrooms: "any",
    propertyType: "any",
  })

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getAllProperties()
        setProperties(data)
        setFilteredProperties(data)
      } catch (error) {
        console.error("Error fetching properties:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)

    // Apply filters
    const filtered = properties.filter((property) => {
      // Price range filter
      if (property.price < newFilters.priceRange[0] || property.price > newFilters.priceRange[1]) {
        return false
      }

      // Bedrooms filter
      if (newFilters.bedrooms !== "any" && property.bedrooms !== Number.parseInt(newFilters.bedrooms)) {
        return false
      }

      // Property type filter
      if (newFilters.propertyType !== "any" && property.type !== newFilters.propertyType) {
        return false
      }

      return true
    })

    setFilteredProperties(filtered)
  }

  return (
    <div>
      <PropertyFilter filters={filters} onFilterChange={handleFilterChange} />

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-pulse">Loading properties...</div>
        </div>
      ) : (
        <>
          <p className="mb-6 text-gray-600">{filteredProperties.length} properties found</p>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No properties match your filters</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
