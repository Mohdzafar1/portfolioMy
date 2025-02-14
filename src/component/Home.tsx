import React from 'react'
import SplitText from './animationContent/SplitText'
import FallingText from './animationContent/FallingText'
import Magnet from './animationContent/Magnets'


const Home = () => {

  return (
    <div>

           <div className="bg-black rounded-xl p-8 mb-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold mb-2">
              <SplitText
              text="I'm Mohd Zafar"
              className="text-3xl font-semibold text-center text-white"
              delay={180}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              // easing="easeOutCubic2
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
              />
             
              <br />
              <SplitText
              text="Front-end Developer"
              className="text-5xl font-semibold text-center text-yellow-400"
              delay={500}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              // easing="easeOutCubic2
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
              />
              {/* <span className="text-yellow-400">Front-end</span> Developer */}
            </h1>
            <div className="text-gray-600 mb-6 max-w-lg">
          
  
  <FallingText
    text={`I’m Mohd Zafar, a dedicated Front-end Developer with a keen eye for detail and a passion for crafting interactive, responsive user interfaces..`}
    highlightWords={["I’m Mohd Zafar", "Front-end Developer", "eye", "passion", "interactive"]}
    // highlightClass="highlighted"
    trigger="hover"
    backgroundColor="transparent"
    wireframes={false}
    gravity={0.56}
    fontSize="1rem"
    mouseConstraintStiffness={0.9}
  />
            
            </div>
            <a
             href="/images/MohdZafarResume.jpg" // Correct path to the image file
             download="MohdZafarResume.jpg"
            >
              <Magnet>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
              HIRE ME
            </button>

              </Magnet>
           
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