"use client"

import { useState } from "react"
import Image from "next/image"
import { FaPlus } from "react-icons/fa"

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories")

  const categories = ["All Categories", "UI Design", "Web Templates"]

  const portfolioItems = [
    {
      type: "Web Templates",
      image: "/images/feshion.png",
      isPlaceholder: false,
      url: "https://ecommerce-feshion.onrender.com/",
      title: "Fashion E-commerce",
    },
    {
      type: "Web Templates",
      image: "/images/login.png",
      isPlaceholder: false,
      url: "https://online-fruit-shop-frontend.vercel.app/",
      title: "Fruit Shop",
    },
    {
      type: "UI Design",
      image: "/images/ecomerceDesgin.png",
      isPlaceholder: false,
      url: "https://www.figma.com/design/vFGbiAD5eaOumquXAyBfHm/VIrtual-Waiter?node-id=0-1&node-type=canvas&t=VxvdjR5ZwSlcxgsW-0",
      title: "E-commerce UI",
    },
    {
      type: "Web Templates",
      image: "/images/codeEditor.png",
      isPlaceholder: false,
      url: "https://codeditor1.netlify.app/",
      title: "Code Editor",
    },
    {
      type: "Web Templates",
      image: "/images/ecommerce.png",
      isPlaceholder: false,
      url: "https://ecomerce01.netlify.app/",
      title: "E-commerce",
    },
    {
      type: "UI Design",
      image: "/images/figmaMovie.png",
      isPlaceholder: false,
      url: "https://storied-zabaione-d4dcc5.netlify.app/",
      title: "Movie",
    },
    {
      type: "Web Templates",
      image: "/images/portfolio.png",
      isPlaceholder: false,
      url: "https://webtech-portfolio.netlify.app/",
      title: "Portfolio",
    },
    {
      type: "UI Design",
      image: "/images/figma desgin.png",
      isPlaceholder: false,
      url: "https://www.figma.com/design/vFGbiAD5eaOumquXAyBfHm/VIrtual-Waiter?node-id=0-1&node-type=canvas&t=VxvdjR5ZwSlcxgsW-0",
      title: "Menu App Design",
    },
  ]

  const filteredItems =
    activeCategory === "All Categories" ? portfolioItems : portfolioItems.filter((item) => item.type === activeCategory)

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
                activeCategory === category ? "text-yellow-400 font-semibold" : "text-gray-600 hover:text-yellow-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-100">
              {item.isPlaceholder ? (
                <div className="aspect-square bg-yellow-400 flex items-center justify-center">
                  <FaPlus className="w-12 h-12 text-yellow-600" />
                </div>
              ) : (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block aspect-square relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                    <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </h3>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project

