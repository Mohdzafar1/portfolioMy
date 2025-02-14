import React from 'react'
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa"
import Carousel from './animationContent/Carousel'
import TrueFocus from './animationContent/TruFocus'

const Education = () => {
  

  return (
    <div>
        <div className="bg-gray-50 p-8">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
        <TrueFocus
sentence="Edu cation"
manualMode={false}
blurAmount={5}
borderColor="yellow"
animationDuration={2}
pauseBetweenAnimations={1}
/>
          
          
          </h2>
        <p className="text-gray-600 text-center mb-8">
        I have a strong educational foundation in software development, with a focus on web technologies.
          <br />
          My studies included in-depth training in programming languages and frameworks relevant to frontend development, which has equipped me with the technical skills required to excel in building responsive and interactive web applications
          <br />
          Lorem ipsum
        </p>

        <div className="flex justify-center w-full">
        <Carousel/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Education