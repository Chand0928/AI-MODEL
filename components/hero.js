import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Virtual property tour"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Explore Properties Virtually</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Tour homes from the comfort of your couch. Immersive 360° virtual tours of premium properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/properties"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Browse Listings
            </Link>
            <Link
              href="/properties"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Start Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
