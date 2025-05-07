"use client"

import { useEffect, useRef } from "react"

export default function PropertyMap({ location }) {
  const mapRef = useRef(null)

  useEffect(() => {
    // This is a placeholder for Google Maps integration
    // In a real application, you would use the Google Maps API

    const renderMap = () => {
      if (!mapRef.current) return

      // Create a simple placeholder map
      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = mapRef.current.clientHeight

      const ctx = canvas.getContext("2d")

      // Draw map background
      ctx.fillStyle = "#e5e7eb"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "#d1d5db"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let i = 0; i < canvas.height; i += 20) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Vertical lines
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }

      // Draw location marker
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Marker pin
      ctx.fillStyle = "#10b981"
      ctx.beginPath()
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2)
      ctx.fill()

      // Add some roads
      ctx.strokeStyle = "#9ca3af"
      ctx.lineWidth = 3

      // Main road
      ctx.beginPath()
      ctx.moveTo(0, centerY + 30)
      ctx.lineTo(canvas.width, centerY + 30)
      ctx.stroke()

      // Secondary road
      ctx.beginPath()
      ctx.moveTo(centerX - 50, 0)
      ctx.lineTo(centerX - 50, canvas.height)
      ctx.stroke()

      // Add text
      ctx.fillStyle = "#4b5563"
      ctx.font = "12px Arial"
      ctx.fillText("Map data placeholder", 10, canvas.height - 10)

      // Clear previous content and append canvas
      mapRef.current.innerHTML = ""
      mapRef.current.appendChild(canvas)
    }

    renderMap()

    // Resize handler
    const handleResize = () => {
      renderMap()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [location])

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden"
      aria-label="Map showing property location"
    ></div>
  )
}
