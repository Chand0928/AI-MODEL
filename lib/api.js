// Mock API functions for Virtual Property Tours

// Mock data for properties
const propertiesData = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    description:
      "This stunning modern villa offers panoramic ocean views, a private infinity pool, and luxurious finishes throughout. The open floor plan and floor-to-ceiling windows create a seamless indoor-outdoor living experience.",
    price: 1250000,
    location: "Gurugram, Haryana",
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    garage: 2,
    type: "house",
    imageUrl: "/placeholder.svg?height=600&width=800",
    hasVirtualTour: true,
    virtualTourUrl: null, // In a real app, this would be a URL to a Matterport tour
    features: ["Ocean View", "Infinity Pool", "Smart Home System", "Chef's Kitchen", "Home Theater", "Wine Cellar"],
    coordinates: { lat: 34.025922, lng: -118.779757 },
  },
  {
    id: "2",
    title: "Downtown Luxury Condo",
    description:
      "Located in the heart of downtown, this luxury condo features high-end finishes, floor-to-ceiling windows with city views, and access to premium building amenities including a rooftop pool, fitness center, and 24-hour concierge.",
    price: 850000,
    location: "Downtown Los Angeles, CA",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    garage: 1,
    type: "condo",
    imageUrl: "/placeholder.svg?height=600&width=800",
    hasVirtualTour: true,
    virtualTourUrl: null,
    features: [
      "City Views",
      "Rooftop Pool",
      "Fitness Center",
      "Concierge Service",
      "Hardwood Floors",
      "Stainless Steel Appliances",
    ],
    coordinates: { lat: 34.044227, lng: -118.267254 },
  },
  {
    id: "3",
    title: "Charming Suburban Home",
    description:
      "This beautifully renovated family home is located in a quiet suburban neighborhood with excellent schools. Features include a spacious backyard, updated kitchen with granite countertops, and a cozy fireplace in the living room.",
    price: 750000,
    location: "Delhi NCR, CA",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    garage: 2,
    type: "house",
    imageUrl: "/placeholder.svg?height=600&width=800",
    hasVirtualTour: true,
    virtualTourUrl: null,
    features: [
      "Renovated Kitchen",
      "Fireplace",
      "Large Backyard",
      "Quiet Neighborhood",
      "Excellent Schools",
      "Hardwood Floors",
    ],
    coordinates: { lat: 34.147785, lng: -118.144516 },
  },
  {
    id: "4",
    title: "Beachfront Apartment",
    description:
      "Wake up to the sound of waves in this stunning beachfront apartment. Featuring a private balcony with ocean views, updated interiors, and direct beach access. The complex offers a swimming pool, tennis courts, and secure parking.",
    price: 925000,
    location: "Santa Monica, CA",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    garage: 1,
    type: "apartment",
    imageUrl: "/placeholder.svg?height=600&width=800",
    hasVirtualTour: false,
    virtualTourUrl: null,
    features: [
      "Ocean View",
      "Private Balcony",
      "Direct Beach Access",
      "Swimming Pool",
      "Tennis Courts",
      "Secure Parking",
    ],
    coordinates: { lat: 34.024212, lng: -118.496475 },
  },
  {
    id: "5",
    title: "Modern Townhouse",
    description:
      "This contemporary townhouse offers modern living in a convenient location. Features include an open floor plan, high ceilings, a private rooftop terrace, and a two-car garage. Walking distance to shops, restaurants, and parks.",
    price: 680000,
    location: "Culver City, CA",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1650,
    garage: 2,
    type: "townhouse",
    imageUrl: "/placeholder.svg?height=600&width=800",
    hasVirtualTour: true,
    virtualTourUrl: null,
    features: [
      "Rooftop Terrace",
      "Open Floor Plan",
      "High Ceilings",
      "Energy Efficient",
      "Walk to Shops",
      "Smart Home Features",
    ],
    coordinates: { lat: 34.021122, lng: -118.386408 },
  },
  {
    id: "6",
    title: "Luxury Penthouse",
    description:
      "Spectacular penthouse with panoramic city views, featuring a wraparound terrace, gourmet kitchen with top-of-the-line appliances, floor-to-ceiling windows, and a private elevator. Building amenities include a concierge, spa, and fitness center.",
    price: 2100000,
    location: "Beverly Hills, CA",
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2800,
    garage: 2,
    type: "condo",
    imageUrl: "/placeholder.svg?height=600&width=800",
    hasVirtualTour: true,
    virtualTourUrl: null,
    features: [
      "Panoramic Views",
      "Wraparound Terrace",
      "Private Elevator",
      "Gourmet Kitchen",
      "Spa Access",
      "Concierge Service",
    ],
    coordinates: { lat: 34.07362, lng: -118.400352 },
  },
]

// Get all properties
export const getAllProperties = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return propertiesData
}

// Get featured properties (first 3)
export const getFeaturedProperties = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return propertiesData.slice(0, 3)
}

// Get property by ID
export const getPropertyById = async (id) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  const property = propertiesData.find((p) => p.id === id)

  if (!property) {
    throw new Error("Property not found")
  }

  return property
}

// Send contact message
export const sendContactMessage = async (formData) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1200))

  // Simulate validation
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error("Missing required fields")
  }

  // In a real app, this would send data to a server
  console.log("Contact form submitted:", formData)

  // Simulate success
  return { success: true }
}

// Mock Cloudinary API integration
export const getCloudinaryUrl = (publicId, options = {}) => {
  // In a real app, this would generate a Cloudinary URL
  // For now, just return a placeholder
  return `/placeholder.svg?height=${options.height || 600}&width=${options.width || 800}`
}

// Mock Matterport API integration
export const getMatterportEmbedUrl = (tourId) => {
  // In a real app, this would generate a Matterport embed URL
  // For now, just return null to indicate we're using a placeholder
  return null
}

// Mock Google Maps API integration
export const getGoogleMapsEmbedUrl = (lat, lng) => {
  // In a real app, this would generate a Google Maps embed URL
  // For now, just return null to indicate we're using a placeholder
  return null
}
