import PropertyListing from "@/components/property-listing"

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Browse Our Properties</h1>
      <PropertyListing />
    </div>
  )
}
