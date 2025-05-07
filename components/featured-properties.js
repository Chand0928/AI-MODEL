"use client"

import { useState, useEffect } from "react"
import { getFeaturedProperties } from "@/lib/api"
import PropertyCard from "./property-card"

export default function FeaturedProperties() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getFeaturedProperties()
        setProperties(data)
      } catch (error) {
        console.error("Error fetching featured properties:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties with immersive virtual tours
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-pulse">Loading properties...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="/properties"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  )
}
