import React from 'react'
import { FaBehance, FaDownload, FaDribbble, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Sidebar = () => {
    const languages = [
        { name: "English", level: 80 },
        { name: "Hindi", level: 90 },
      ]
    
      const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JS", level: 80 },
        { name: "TS", level: 70 },
        { name: "React", level: 75 },
        { name: "Next.js", level: 75 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
        { name: "MongoDb", level: 70 },
      ]
    
      const extraSkills = [
        "Bootstrap, Tailwind css",
        "Material UI",
        "GIT Knowledge",
      ]
  return (
    <div> 
         <div className="w-64 bg-white p-6 hidden lg:block">
    <div className="flex flex-col items-center">
    <img
        src="/images/mz.jpg"
        alt="Profile"
        className="rounded-full w-32 h-32 mb-4"
        />

      <h2 className="text-xl font-semibold">Mohd Zafar</h2>
      <p className="text-gray-600 mb-4">Full-Stack Developer</p>
      
      {/* Social Icons */}
      <div className="flex gap-2 mb-8">
        {[FaFacebook, FaTwitter, FaLinkedin, FaGithub].map((Icon, index) => (
          <button key={index} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </div>

      {/* Languages */}
      <div className="w-full mb-8">
        <h3 className="font-semibold mb-4">Languages</h3>
        {languages.map((lang, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{lang.name}</span>
              <span>{lang.level}%</span>
            </div>
            {/* <Progress value={lang.level} className="h-2" /> */}
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="w-full mb-8">
        <h3 className="font-semibold mb-4">Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            {/* <Progress value={skill.level} className="h-2" /> */}
          </div>
        ))}
      </div>

      {/* Extra Skills */}
      <div className="w-full mb-8">
        <h3 className="font-semibold mb-4">Extra Skills</h3>
        {extraSkills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-yellow-400" />
            <span className="text-sm">{skill}</span>
          </div>
        ))}
      </div>

      {/* Download CV Button */}
      <a
             href="/images/MohdZafarResume.jpg" // Correct path to the image file
             download="MohdZafarResume.jpg"
            >
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
              Download
            </button>
            </a>
    </div>
  </div></div>
  )
}

export default Sidebar