import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si"

const SkillSection = () => {
  const skills = [
    {
      category: "Front-end",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      ],
    },
    {
      category: "Back-end",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "SQL", icon: <FaDatabase className="text-blue-500" /> },
      ],
    },
    {
        category: "Mobile-App",
        items: [
          { name: "ReactNative", icon: <FaReact className="text-blue-600" /> },
         
        ],
      },
  ]

  return (
    <div className="container mx-auto px-4 py-16  my-3 rounded-xl bg-black">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((section) => (
          <div key={section.category} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {section.items.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-2">
                  <div className="text-2xl">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillSection

