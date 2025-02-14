"use client"
import React from 'react'
import { FaCode, FaPencilRuler, FaLaptopCode } from "react-icons/fa"
import InfiniteMenu from './animationContent/InfiniteMenu'

const WorkHistory = () => {

      const items = [
        {
          image: '/images/pip.jpg',
          link: 'https://google.com/',
          title: 'Software Developer at Pip Trade',
          description:'Working on building frontend applications'
        },
        {
          image: '/images/aarvy.jpg',
          link: 'https://google.com/',
          title: 'React.js Developer intern at Aarvy Technologies',
          description: 'Developed and optimized frontend applications using React.js.'
        },
        {
          image: '/images/qspider.jpeg',
          link: 'https://google.com/',
          title: 'Web developer Training at Qspider',
          description: 'Completed comprehensive web development training at QSpiders.'
        },
        {
          image: '/images/internshala.jpg',
          link: 'https://google.com/',
          title: 'React.js Developer at Internshala',
          description: 'React.js developer training from internshalaI'
        }
      ];
      
  return (
    <div>
        <div className=" p-8  my-3 rounded-xl bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-white">Work History</h2>
        <p className="text-gray-600 text-center mb-8">
        This work history summary emphasizes your experience, technical skills, and project contributions in a way that showcases your strengths in frontend development and trading platform projects.
          <br />
          Let me know if you’d like more detailed project descriptions or additional highlights.

        </p>
         <InfiniteMenu items={items}/>
     
      </div>
    </div>
    </div>
  )
}

export default WorkHistory