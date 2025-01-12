import React from 'react'

const Home = () => {
  return (
    <div>
           <div className="bg-white rounded-xl p-8 mb-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold mb-2">
              I'm Mohd Zafar
              <br />
              <span className="text-yellow-400">Front-end</span> Developer
            </h1>
            <p className="text-gray-600 mb-6 max-w-lg">
            I’m Mohd Zafar, a dedicated Front-end Developer with a keen eye for detail and a passion for crafting interactive, responsive user interfaces..
            </p>
            <a
            href="/public/images/Mohd_Zafar_Resume.docx.pdf" // Path to the file in the public folder
            download="Mohd_Zafar_Resume.pdf"
            >
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
              HIRE ME
            </button>
            </a>
          </div>
          <img
  src="/images/mz.jpg"
  alt="Profile"
  className="w-64 lg:w-96 rounded-full"
/>

        </div>
    </div>
  )
}

export default Home