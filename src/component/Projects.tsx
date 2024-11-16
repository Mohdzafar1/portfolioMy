"use client"

import { useState } from "react"
import { FaPlus } from "react-icons/fa"

const Project=()=> {
  const [activeCategory, setActiveCategory] = useState("All Categories")

  const categories = [
    "All Categories",
    "UI Design",
    "Web Templates",
    "Logo",
    "Branding",
  ]

  const portfolioItems = [
    {
      type: "UI Design",
      image: "/placeholder.svg?height=300&width=400",
      isPlaceholder: true,
    },
    {
      type: "Branding",
      image: "/placeholder.svg?height=300&width=400",
      title: "Business Card Design",
    },
    {
      type: "Branding",
      image: "/placeholder.svg?height=300&width=400",
      title: "Letterhead Design",
    },
    {
      type: "Web Templates",
      image: "/placeholder.svg?height=300&width=400",
      title: "Restaurant Website",
    },
    {
      type: "Logo",
      image: "/placeholder.svg?height=300&width=400",
      title: "Logo Mockup",
    },
    {
      type: "Branding",
      image: "/placeholder.svg?height=300&width=400",
      title: "Business Card Design",
    },
    {
      type: "Logo",
      image: "/placeholder.svg?height=300&width=400",
      title: "Embossed Logo",
    },
    {
      type: "Branding",
      image: "/placeholder.svg?height=300&width=400",
      title: "Brochure Design",
    },
    {
      type: "Branding",
      image: "/placeholder.svg?height=300&width=400",
      title: "Corporate Identity",
    },
  ]

  const filteredItems =
    activeCategory === "All Categories"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeCategory)

  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Portfolio</h2>
        <p className="text-gray-600 text-center mb-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
          <br />
          do amet sint. Velit officia consequat duis enim velit mollit.
          <br />
          Lorem ipsum
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-600 hover:text-yellow-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100"
            >
              {item.isPlaceholder ? (
                <div className="absolute inset-0 bg-yellow-400 flex items-center justify-center">
                  <FaPlus className="w-12 h-12 text-yellow-600" />
                </div>
              ) : (
                <>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                    <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project