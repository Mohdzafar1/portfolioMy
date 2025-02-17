// import { Progress } from "@/components/ui/progress"
import Sidebar from "@/component/Sidebar"
import Home from "@/component/Home"
import Service from "@/component/Service"
import Education from "@/component/Education"
import WorkHistory from "@/component/WorkHistory"
import Project from "@/component/Projects"
import Contact from "@/component/Contact"
import './globals.css'
import SkillSection from "@/component/SkillSection"
import SplashCursor from "@/component/animationContent/SplashCursor"



export default function Component() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
       <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Hero Section */}
        <SplashCursor />
         <Home/>

        {/* Services Section */}
        <Service/>
        <Project/>
        <SkillSection/>
        <Education/>
        
        <WorkHistory/>
        
        <Contact/>
      </div>
    </div>
  )
}