import React from 'react'
import { FaCode, FaPencilRuler, FaLaptopCode } from "react-icons/fa"

const WorkHistory = () => {
    const workHistory = [
        {
          icon: <FaPencilRuler className="w-5 h-5" />,
          position: "Software Developer at Pip Trade Delhi",
          certificateTitle: "Software Developer",
          period:"July 2024 - Present",
          position:"Developer",
          description:
            "Working on building frontend applications with a focus on trading platforms, utilizing React.js and modern frontend technologies to improve user experience.Implementing key features such as a comprehensive analytical dashboard for system monitoring, real-time updates, threat notifications, and interactive data visualizations, delivering meaningful insights to end-users",
        },
        {
          icon: <FaCode className="w-5 h-5" />,
          position: "Software Developer at Aarvy Technologies Gurugram",
          certificateTitle: "React.js Developer intern",
          period:"December 2023 - June 2024",
          position:"Developer",
          description:
            "Developed and optimized frontend applications using React.js, gaining valuable hands-on experience in building responsive, user-friendly interfaces.Collaborated on a MERN Stack project, contributing to both the frontend and backend, enhancing the application’s performance and scalability.Gained experience with UI component libraries such as Ant Design, Material UI, and Fluent UI, integrating visually appealing and consistent UI elements.",
        },
        {
          icon: <FaLaptopCode className="w-5 h-5" />,
          position: "QSpiders Training",
          certificateTitle: "QSpiders Training",
          period:"July 2023 - Dec 2023",
          position:"Student",
          description:
            "Completed comprehensive web development training at QSpiders, mastering essential frontend and backend skills. Gained hands-on experience with HTML, CSS, JavaScript, and fundamental frameworks. Developed a solid understanding of full-stack development principles, preparing for real-world application building.",
        },
      ]
  return (
    <div>
        <div className="bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Work History</h2>
        <p className="text-gray-600 text-center mb-8">
        This work history summary emphasizes your experience, technical skills, and project contributions in a way that showcases your strengths in frontend development and trading platform projects.
          <br />
          Let me know if you’d like more detailed project descriptions or additional highlights.

        </p>

        <div className="space-y-6">
          {workHistory.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-1/3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold">{item.position}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{item.position}</span>
                  <span className="bg-yellow-400 text-xs px-2 py-1 rounded">{item.period}</span>
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

export default WorkHistory