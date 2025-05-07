import ContactForm from "@/components/contact-form"
import PropertyMap from "@/components/property-map"

export default function ContactPage() {
  // Office location coordinates
  const officeLocation = { lat: 34.052235, lng: -118.243683 }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Our Office</h2>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="font-semibold text-lg mb-2">Virtual Property Tours</h3>
            <p className="mb-1">123 Real Estate Avenue</p>
            <p className="mb-1">Los Angeles, CA 90001</p>
            <p className="mb-1">Phone: (555) 123-4567</p>
            <p>Email: info@virtualpropertytours.com</p>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            <PropertyMap location={officeLocation} />
          </div>
        </div>
      </div>
    </div>
  )
}
