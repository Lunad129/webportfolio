import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { FaReact } from 'react-icons/fa';         
import { SiTailwindcss } from 'react-icons/si'; 


const projects = () => {
  return (
    <section id="projects" className="bg-cyan-900 flex flex-col justify-center items-center min-h-[40vh]">
      <h1 className="font-mono text-amber-50 text-3xl text-center mb-6 font-bold mt-15">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl mt-5">
        {/* Project 1 */}
        <div className="flip-card w-full md:w-[35rem] h-[29rem] mx-auto ">
          <div className="flip-card-inner w-full h-full">
            {/*front side*/}
            <div className="flip-card-front bg-cyan-700 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-full">
              <span className="font-sans text-xl text-amber-50 font-bold mb-4">Portfolio Website</span>
              
              <img
                src="/portfoliopic.jpg"
                alt="Portfolio Preview"
                className="w-200 h-150 mb-4 object-cover border-2 border-amber-50"
              />
              <p className="text-amber-50 text-center mb-6 text-xl drop-shadow-lg tracking-wide">
                This is a personal portfolio website designed to showcase my skills, projects, and professional background as a front-end developer.
              </p>
               
              
            </div>

            {/*back side*/}
            <div className="flip-card-back bg-cyan-700 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-full">
              <span className="font-sans text-xl text-amber-50 font-bold mb-4">More Info</span>
              <p className="text-amber-50 text-center mb-6 text-xl drop-shadow-lg tracking-wide">
                This is a personal portfolio website developed using React, Vite, and Tailwind CSS. The site features a modern, responsive design and serves as a professional showcase of my front-end development skills.
              </p>

              {/*tech stack*/}
           <div className="flex gap-10 mb-6 w-full items-start mt-3">
              <div className="bg-cyan-900 rounded-2xl shadow-lg p-2 flex flex-col w-40">
                <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                    <FaReact className="mr-2" />React
                </span>
              </div>

               <div className="bg-cyan-900 rounded-2xl shadow-lg p-2 flex flex-col w-40">
                <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                       <SiTailwindcss className="mr-2" />Tailwind CSS
                </span>
              </div>
            </div>
            

              <div className="flex gap-10 mb-6 w-full items-start mt-3">
                {/* GitHub Icon */}
                <a href="https://github.com/Lunad129/webportfolio.git" 
                target="_blank"
                rel="noopener noreferrer" 
                className="hover:text-cyan-900 text-amber-50 transition duration-300 transform hover:scale-110 rounded-full border-3 px-2 py-2" >
                  <FaGithub/></a>
                        
                
                {/* Portfolio Link Icon */}
                <a
                  href="https://webportfolio-9z2c-dulani-hemachandras-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-900 text-amber-50 transition duration-300 transform hover:scale-110 rounded-full border-3 px-2 py-2">
                  <IoLink />
                </a>
              </div> 
              
            </div>


          </div>
        </div>


        {/* Project 2 */}
           <div className="flip-card w-full md:w-[35rem] h-[29rem] mx-auto">
          <div className="flip-card-inner w-full h-full">
            {/*front side*/}
            <div className="flip-card-front bg-cyan-700 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-full">
              <span className="font-sans text-xl text-amber-50 font-bold mb-4">Portfolio Website</span>
              
              <img
                src="/portfoliopic.jpg"
                alt="Portfolio Preview"
                className="w-200 h-150 mb-4 object-cover border-2 border-amber-50"
              />
              <p className="text-amber-50 text-center mb-6 text-xl drop-shadow-lg tracking-wide">
                This is a personal portfolio website designed to showcase my skills, projects, and professional background as a front-end developer.
              </p>
               
              
            </div>

            {/*back side*/}
            <div className="flip-card-back bg-cyan-700 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-full">
              <span className="font-sans text-xl text-amber-50 font-bold mb-4">More Info</span>
              <p className="text-amber-50 text-center mb-6 text-xl drop-shadow-lg tracking-wide">
                This is a personal portfolio website developed using React, Vite, and Tailwind CSS. The site features a modern, responsive design and serves as a professional showcase of my front-end development skills.
              </p>

              {/*tech stack*/}
           <div className="flex gap-10 mb-6 w-full items-start mt-3">
              <div className="bg-cyan-900 rounded-2xl shadow-lg p-2 flex flex-col w-40">
                <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                    <FaReact className="mr-2" />React
                </span>
              </div>

               <div className="bg-cyan-900 rounded-2xl shadow-lg p-2 flex flex-col w-40">
                <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                       <SiTailwindcss className="mr-2" />Tailwind CSS
                </span>
              </div>
            </div>
            

              <div className="flex gap-10 mb-6 w-full items-start mt-3">
                {/* GitHub Icon */}
                <a href="https://github.com/Lunad129/webportfolio.git" 
                target="_blank"
                rel="noopener noreferrer" 
                className="hover:text-cyan-900 text-amber-50 transition duration-300 transform hover:scale-110 rounded-full border-3 px-2 py-2" >
                  <FaGithub/></a>
                        
                
                {/* Portfolio Link Icon */}
                <a
                  href="https://webportfolio-9z2c-dulani-hemachandras-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-900 text-amber-50 transition duration-300 transform hover:scale-110 rounded-full border-3 px-2 py-2">
                  <IoLink />
                </a>
              </div> 
              
            </div>


          </div>
        </div>

        {/*project 3*/}
            <div className="flip-card w-full md:w-[35rem] h-[29rem] mx-auto mt-8">
          <div className="flip-card-inner w-full h-full">
            {/*front side*/}
            <div className="flip-card-front bg-cyan-700 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-full">
              <span className="font-sans text-xl text-amber-50 font-bold mb-4">Portfolio Website</span>
              
              <img
                src="/portfoliopic.jpg"
                alt="Portfolio Preview"
                className="w-200 h-150 mb-4 object-cover border-2 border-amber-50"
              />
              <p className="text-amber-50 text-center mb-6 text-xl drop-shadow-lg tracking-wide">
                This is a personal portfolio website designed to showcase my skills, projects, and professional background as a front-end developer.
              </p>
               
              
            </div>

            {/*back side*/}
            <div className="flip-card-back bg-cyan-700 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-full">
              <span className="font-sans text-xl text-amber-50 font-bold mb-4">More Info</span>
              <p className="text-amber-50 text-center mb-6 text-xl drop-shadow-lg tracking-wide">
                This is a personal portfolio website developed using React, Vite, and Tailwind CSS. The site features a modern, responsive design and serves as a professional showcase of my front-end development skills.
              </p>

              {/*tech stack*/}
           <div className="flex gap-10 mb-6 w-full items-start mt-3">
              <div className="bg-cyan-900 rounded-2xl shadow-lg p-2 flex flex-col w-40">
                <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                    <FaReact className="mr-2" />React
                </span>
              </div>

               <div className="bg-cyan-900 rounded-2xl shadow-lg p-2 flex flex-col w-40">
                <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                       <SiTailwindcss className="mr-2" />Tailwind CSS
                </span>
              </div>
            </div>
            

              <div className="flex gap-10 mb-6 w-full items-start mt-3">
                {/* GitHub Icon */}
                <a href="https://github.com/Lunad129/webportfolio.git" 
                target="_blank"
                rel="noopener noreferrer" 
                className="hover:text-cyan-900 text-amber-50 transition duration-300 transform hover:scale-110 rounded-full border-3 px-2 py-2" >
                  <FaGithub/></a>
                        
                
                {/* Portfolio Link Icon */}
                <a
                  href="https://webportfolio-9z2c-dulani-hemachandras-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-900 text-amber-50 transition duration-300 transform hover:scale-110 rounded-full border-3 px-2 py-2">
                  <IoLink />
                </a>
              </div> 
              
            </div>


          </div>
        </div>
    
       {/*project 4*/}
           <div className="flip-card w-full md:w-[35rem] h-[29rem] mx-auto mt-8">
          <div className="flip-card-inner w-full h-full">
            {/*front side*/}
            <div className="flip-card-front bg-cyan-700 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-full">
              <span className="font-sans text-xl text-amber-50 font-bold mb-4">Portfolio Website</span>
              
              <img
                src="/portfoliopic.jpg"
                alt="Portfolio Preview"
                className="w-200 h-150 mb-4 object-cover border-2 border-amber-50"
              />
              <p className="text-amber-50 text-center mb-6 text-xl drop-shadow-lg tracking-wide">
                This is a personal portfolio website designed to showcase my skills, projects, and professional background as a front-end developer.
              </p>
               
              
            </div>

            {/*back side*/}
            <div className="flip-card-back bg-cyan-700 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center h-full">
              <span className="font-sans text-xl text-amber-50 font-bold mb-4">More Info</span>
              <p className="text-amber-50 text-center mb-6 text-xl drop-shadow-lg tracking-wide">
                This is a personal portfolio website developed using React, Vite, and Tailwind CSS. The site features a modern, responsive design and serves as a professional showcase of my front-end development skills.
              </p>

              {/*tech stack*/}
           <div className="flex gap-10 mb-6 w-full items-start mt-3">
              <div className="bg-cyan-900 rounded-2xl shadow-lg p-2 flex flex-col w-40">
                <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                    <FaReact className="mr-2" />React
                </span>
              </div>

               <div className="bg-cyan-900 rounded-2xl shadow-lg p-2 flex flex-col w-40">
                <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                       <SiTailwindcss className="mr-2" />Tailwind CSS
                </span>
              </div>
            </div>
            

              <div className="flex gap-10 mb-6 w-full items-start mt-3">
                {/* GitHub Icon */}
                <a href="https://github.com/Lunad129/webportfolio.git" 
                target="_blank"
                rel="noopener noreferrer" 
                className="hover:text-cyan-900 text-amber-50 transition duration-300 transform hover:scale-110 rounded-full border-3 px-2 py-2" >
                  <FaGithub/></a>
                        
                
                {/* Portfolio Link Icon */}
                <a
                  href="https://webportfolio-9z2c-dulani-hemachandras-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-900 text-amber-50 transition duration-300 transform hover:scale-110 rounded-full border-3 px-2 py-2">
                  <IoLink />
                </a>
              </div> 
              
            </div>


          </div>
        </div>

      </div>
    </section>
  )
}

export default projects

