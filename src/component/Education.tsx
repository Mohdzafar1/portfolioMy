import React from 'react'
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa"

const Education = () => {
  const educationData = [
    {
      icon: <FaGraduationCap className="w-5 h-5" />,
      institution: "UTU",
      certificateTitle: "B.Tech",
      description:"Computer science & engg.",
      yearPassing:"2020-2023"
      },
    {
      icon: <FaGraduationCap className="w-5 h-5" />,
      institution: "UBTER",
      certificateTitle: "PolyTechnic(Diploma)",
      description:"Computer science & engg.",
       yearPassing:"2017-2020"
    },
    {
      icon: <FaGraduationCap className="w-5 h-5" />,
      institution: "12th",
      certificateTitle: "12th class",
      yearPassing:"2017",
      description:"PCM",
    },
  ]

  return (
    <div>
        <div className="bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Education</h2>
        <p className="text-gray-600 text-center mb-8">
        I have a strong educational foundation in software development, with a focus on web technologies.
          <br />
          My studies included in-depth training in programming languages and frameworks relevant to frontend development, which has equipped me with the technical skills required to excel in building responsive and interactive web applications
          <br />
          Lorem ipsum
        </p>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-1/3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold">{item.institution}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Student</span>
                  <span className="bg-yellow-400 text-xs px-2 py-1 rounded">{item.yearPassing}</span>
                </div>
              </div>

              <div className="md:w-2/3">
                <h4 className="font-semibold mb-2">{item.certificateTitle}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Education