"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "2a4a4dae-31af-4902-8066-408afba067bc",
          subject: "New Contact Message",
          from_name: formData.name,
          ...formData,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        throw new Error(result.message || "Submission failed")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again.",
      })
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {status.submitted ? (
        <div className="text-center py-8">
          <div className="text-emerald-600 text-5xl mb-4">✓</div>
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">Your message has been sent successfully.</p>
          <button
            onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Your phone number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Your message"
            ></textarea>
          </div>

          {status.error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md">{status.error}</div>}

          <button
            type="submit"
            disabled={status.submitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  )
}
