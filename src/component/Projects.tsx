"use client"

import { useState } from "react"
import Image from "next/image"
import { FaPlus } from "react-icons/fa"
import RollingGallery from "./animationContent/RoallingGallery"

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



  return (
    <div className="bg-back-50 p-8 my-3 rounded-xl bg-black">
    

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">Portfolio</h2>
        <p className="text-gray-600 text-center mb-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
          <br />
          do amet sint. Velit officia consequat duis enim velit mollit.
          <br />
          Lorem ipsum
        </p>

        <RollingGallery autoplay={true} pauseOnHover={true} />

      </div>
    </div>
  )
}

export default Project

