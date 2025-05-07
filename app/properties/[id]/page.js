"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, Maximize, BedDouble, Bath, Car } from "lucide-react"
import { getPropertyById } from "@/lib/api"
import PropertyMap from "@/components/property-map"

export default function PropertyDetails({ params }) {
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getPropertyById(params.id)
        setProperty(data)
      } catch (error) {
        console.error("Error fetching property:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-pulse">Loading property details...</div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Property not found</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Virtual Tour Viewer */}
        <div className="relative w-full h-[50vh] bg-gray-200">
          {property.virtualTourUrl ? (
            <div className="w-full h-full">
              <iframe
                src={property.virtualTourUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title={`Virtual tour of ${property.title}`}
              />
            </div>
          ) : (
            <div className="relative w-full h-full">
              <Image src={property.imageUrl || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition">
                  <Maximize className="w-5 h-5" />
                  View 360° Tour
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Property Details */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
              <p className="flex items-center text-gray-600 mt-2">
                <MapPin className="w-4 h-4 mr-1" />
                {property.location}
              </p>
            </div>
            <div className="text-3xl font-bold text-emerald-600">${property.price.toLocaleString()}</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Maximize className="w-4 h-4" />
                <span className="text-sm">Area</span>
              </div>
              <div className="font-semibold">{property.sqft} sq ft</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <BedDouble className="w-4 h-4" />
                <span className="text-sm">Bedrooms</span>
              </div>
              <div className="font-semibold">{property.bedrooms}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Bath className="w-4 h-4" />
                <span className="text-sm">Bathrooms</span>
              </div>
              <div className="font-semibold">{property.bathrooms}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Car className="w-4 h-4" />
                <span className="text-sm">Garage</span>
              </div>
              <div className="font-semibold">{property.garage} cars</div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Location & Nearby</h2>
            <PropertyMap location={property.coordinates} />
          </div>
        </div>
      </div>
    </div>
  )
}
