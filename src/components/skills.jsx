import { FaReact } from 'react-icons/fa';         // React.js
import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'; // JS, HTML5, CSS3
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';   // Tailwind, Bootstrapimport React from 'react
import { IoLogoNodejs } from "react-icons/io";
import { FaPhp } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { PiGithubLogoBold } from "react-icons/pi";
import { SiSelenium } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { RxFigmaLogo } from "react-icons/rx";




const skills = () => {
  return (
    <section id="skills" className="bg-blue-950 flex flex-col justify-center items-center min-h-[40vh]">
          <h1 className="font-mono text-amber-50 text-3xl text-center mb-6 font-bold mt-5">Technical Skills</h1>
          <br></br>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[1200px] max-w-10xl">
        <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center transition duration-300 transform hover:scale-105">
          <span className="font-sans text-xl text-amber-50 font-bold ">Frontend Development</span>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                  <FaReact className="mr-2" />
                  React.js
                  </span>
                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2 ">
                    <SiJavascript className="mr-2"/>
                    JavaScript</span>
                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2  ">
                  <SiHtml5 className="mr-2"/>  
                    HTML5</span>
                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2 ">
                  <SiCss3 className="mr-2"/>
                    CSS3</span>
                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2 ">
                    < SiTailwindcss className="mr-2"/>
                    Tailwind CSS</span>
                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2 ">
                    <  SiBootstrap className="mr-2"/>
                    Bootstrap</span>
                  </div>      

             </div>
        </div>

        <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center transition duration-300 transform hover:scale-105">
          <span className="font-sans text-xl text-amber-50 font-bold ">Backend Development</span>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                    <IoLogoNodejs className="mr-2" />
                    Node.js
                    </span>

                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 ">Express.js</span>

                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2 ">
                    <FaPhp  className="mr-2" />Php</span>

                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2 ">
                    <FaJava className="mr-2" />
                    Java</span>

                  </div>

                      

             </div>
        </div>

        <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center transition duration-300 transform hover:scale-105">
          <span className="font-sans text-xl text-amber-50 font-bold ">Databases</span>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
                  <div className=" bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                    <SiMongodb className="mr-2"/>MongoDB</span>

                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2 ">
                    <GrMysql className="mr-2" />
                    MySQL</span>
                  </div>     

             </div>
        </div>

        <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center transition duration-300 transform hover:scale-105">
          <span className="font-sans text-xl text-amber-50 font-bold ">Tools</span>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                    <PiGithubLogoBold className="mr-2"/>Github</span>

                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2 ">
                    <SiSelenium className="mr-2"/> Selenium</span>

                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                    <VscVscodeInsiders className="mr-2" />
                  VS Code</span>
                  </div>

                  <div className="bg-blue-950 rounded-2xl shadow-lg p-4 flex flex-col items-center">
                  <span className="font-sans text-s text-amber-50 flex items-center gap-2">
                    <RxFigmaLogo className="mr-2"/>Figma</span>

                  </div>

                  

     

             </div>
        </div>

      </div>      

    </section>
    
  )
}

export default skills