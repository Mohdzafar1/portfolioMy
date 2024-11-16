"use client"

import { useState } from "react"
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"

const Contact=()=> {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Leave Us Your Info</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name ( Required)"
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-yellow-400"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email ( Required)"
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-yellow-400"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-yellow-400"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-yellow-400 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            {/* Location Info */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Country:</span>
                    <span>India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">City:</span>
                    <span>Kichha</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Street:</span>
                    <span>Kichha ward no-11</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Info */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span>mohdzafar97597@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Skype:</span>
                    <span>@Yourusername</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Telegram:</span>
                    <span>@Yourusername</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Support Services:</span>
                    <span>15369</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Office:</span>
                    <span>+58 (021)356 587 235</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Personal:</span>
                    <span>+58 (021)356 587 235</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact