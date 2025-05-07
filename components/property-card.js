import Link from "next/link"
import Image from "next/image"
import { MapPin, BedDouble, Bath, Maximize } from "lucide-react"

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/properties/${property.id}`}>
        <div className="relative h-64 w-full">
          <Image src={property.imageUrl || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
          {property.hasVirtualTour && (
            <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              360° Tour
            </div>
          )}
          <div className="absolute bottom-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            ${property.price.toLocaleString()}
          </div>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/properties/${property.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

        <div className="flex justify-between border-t pt-4">
          <div className="flex items-center text-gray-700">
            <BedDouble className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Bath className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Maximize className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.sqft} sq ft</span>
          </div>
        </div>

        <Link
          href={`/properties/${property.id}`}
          className="mt-4 block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2 rounded-lg transition-colors"
        >
          View Tour
        </Link>
      </div>
    </div>
  )
}
