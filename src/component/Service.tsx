import React from 'react'
import { HiCamera, HiCode, HiColorSwatch, HiMicrophone, HiPuzzle, HiSpeakerphone } from 'react-icons/hi'
import TrueFocus from './animationContent/TruFocus'

const Service = () => {
    
    const services = [
        {
          icon: <HiCode className="w-8 h-8" />,
          title: "Front-End developer",
          description: "Blog, E-commerce",
        },
        {
          icon: <HiColorSwatch className="w-8 h-8" />,
          title: "UI/UX Design",
          description: "Mobile App, Website Design",
        },
        {
          icon: <HiCode className="w-8 h-8" />,
          title: "Back-End developer",
          description: "Scalable back-end",
        },
      ]


  return (
    <div>
           <div className="bg-black rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-white">
          <TrueFocus 
sentence="My Services"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>
            {/* My Services */}
            </h2>
          <p className="text-gray-600 text-center mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor<br />
            do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 text-yellow-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Service
  