import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import React from 'react';

const projects = () => {
  return (
    <section id="projects" className="bg-cyan-900 flex flex-col items-center min-h-[40vh] py-10">
      <h1 className="font-mono text-amber-50 text-3xl text-center mb-8 font-bold mt-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl mt-6">
        {/* Project 1 */}
        <div className="bg-cyan-950/70 rounded-2xl shadow-lg p-6 flex flex-col border-cyan-600 transition duration-300 transform hover:scale-105 hover:border-cyan-300">
          <span className="text-amber-50 text-xl font-semibold mb-2 text-center mt-4">Portfolio Website</span>
          <div className="mt-4">
            <img 
                  src="portfoliopic.jpg"
                  alt="Project Screenshot"
                  className="rounded-lg mb-4 border-3 border-cyan-800"/>
          </div>

          <p className="text-amber-50 mb-4">This is a personal portfolio website developed using React and Tailwind CSS. The site features a modern, responsive design and serves as a professional showcase of my front-end development skills.</p>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-cyan-800 text-amber-50 px-4 py-1 rounded-xl text-sm flex items-center font-semibold">Next.js</span>
            <span className="bg-cyan-800 text-amber-50 px-4 py-1 rounded-xl text-sm flex items-center font-semibold">JavaScript</span>
            <span className="bg-cyan-800 text-amber-50 px-4 py-1 rounded-xl text-sm flex items-center font-semibold">Tailwind CSS</span>
            <span className="bg-cyan-800 text-amber-50 px-4 py-1 rounded-xl text-sm flex items-center font-semibold">Vercel</span>
          </div>
          
          <div className="flex gap-4 mt-5">
            <a href="https://github.com/Lunad129/webportfolio" target="_blank" className="text-amber-50 hover:text-cyan-300 rounded-2xl text-2xl target-blank"><FaGithub /></a>
            <a href="https://webportfolio-9z2c-dx902w9hz-dulanihemachandra.vercel.app/" target="_blank" className="text-amber-50 hover:text-cyan-300 rounded-2xl text-2xl "><IoLink /></a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-cyan-950/70 rounded-2xl shadow-lg p-6 flex flex-col border-cyan-600 transition duration-300 transform hover:scale-105 hover:border-cyan-300">
          <span className="text-amber-50 text-xl font-semibold mb-2 text-center mt-4">Ui/Ux Design for Food delivery Application</span>
          <div className="mt-4">
            <img 
                  src="food.png"
                  alt="Project Screenshot"
                  className="rounded-lg mb-4 border-3 border-cyan-800  w-[650px] h-[280px]"/>
          </div>

          <p className="text-amber-50 mb-4">Foodies is a modern food delivery app prototype designed in Figma. It focuses on user-friendly navigation, clean UI design, and seamless food ordering features. The prototype showcases key screens such as home, menu, cart, and checkout, providing a smooth and intuitive experience for users.</p>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-cyan-800 text-amber-50 px-4 py-1 rounded-xl text-sm flex items-center font-semibold">Figma</span>
            {/*<span className="bg-cyan-800 text-amber-50 px-4 py-1 rounded-xl text-sm flex items-center font-semibold">JavaScript</span>
            <span className="bg-cyan-800 text-amber-50 px-4 py-1 rounded-xl text-sm flex items-center font-semibold">Tailwind CSS</span>
            <span className="bg-cyan-800 text-amber-50 px-4 py-1 rounded-xl text-sm flex items-center font-semibold">Vercel</span>*/}
          </div>

          <div className="flex gap-4 mt-5">
            <a href="https://www.figma.com/proto/RWrX70orgWqzz1s44mOpuS/Foodies?node-id=1-88&p=f&t=rev8xDysHimTNqM6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A88" target="_blank" className="text-amber-50 hover:text-cyan-300 rounded-2xl text-2xl "><SiFigma /></a>
            {/*<a href="https://webportfolio-9z2c-dulani-hemachandras-projects.vercel.app/" target="_blank" className="text-amber-50 hover:text-cyan-300 rounded-2xl text-2xl "><IoLink /></a>*/}
          </div>
        </div>
        
       
      </div>
    </section>
  )
}

export default projects