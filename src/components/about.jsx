import { BiCodeAlt } from 'react-icons/bi';
import { FaGraduationCap } from "react-icons/fa6";
import { MdVerified } from 'react-icons/md';
import { FaBrain } from "react-icons/fa";
import { GiCrystalBall, GiLightBulb } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
const about = () => {
  return (
    <>
    <section id="about" className="bg-blue-950 flex flex-col justify-center items-center min-h-[40vh]">
          <h1 className="font-mono text-amber-50 text-3xl text-center mb-6 font-bold">About Me</h1>
          <br></br>

        <div className="bg-blue-900 bg-opacity-80 rounded-xl shadow-lg p-8 max-w-8xl w-[1270px] flex flex-col items-center">
          <p className="font-sans text-amber-50 text-xl text-center">
          I'm Shashika Dulani Hemachandra, an ICT undergraduate at Uva Wellassa University, specializing in Software Technology. I’m passionate about frontend development and quality assurance. I love creating clean, responsive user interfaces using React and ensuring their performance and reliability through testing.
          </p>
        </div>

         

     

        {/*div className="flex flex-col justify-center items-center gap-10 w-full">
            <div className="bg-blue-950  rounded-xl shadow-lg p-15 w-[500px] flex flex-col items-center border-amber-50 border-2 transition duration-300 transform hover:scale-105 hover:border-blue-900">
              <h1 className=" text-center font-mono text-2xl text-amber-50">Education </h1> 
              <FaGraduationCap className="text-2xl text-amber-100"/>
              <p className=" text-center font-mono text-xl text-amber-50">Information & Communication Technology undergraduate at Uva Wellassa University</p>
            </div>

            <div className="bg-blue-950  rounded-xl shadow-lg p-15 w-[500px] flex flex-col items-center  border-amber-50 border-2 transition duration-300 transform hover:scale-105 hover:border-blue-900">
                <h1 className=" text-center font-mono text-2xl text-amber-50">Frontend Development</h1> 
                <BiCodeAlt className="text-2xl text-amber-100"/>
                <p className=" text-center font-mono text-xl text-amber-50">Skilled in building responsive UIs using React, Tailwind CSS, and modern JavaScript</p>
           </div>

           <div className="bg-blue-950  rounded-xl shadow-lg p-15 w-[500px] flex flex-col items-center  border-amber-50 border-2 transition duration-300 transform hover:scale-105 hover:border-blue-900">
              <h1 className=" text-center font-mono text-2xl text-amber-50">Quality Assurance</h1>  
              <MdVerified className="text-2xl text-amber-100"/>
              <p className=" text-center font-mono text-xl text-amber-50">Passionate about testing and validation to ensure performance, accessibility, and bug-free functionality</p>
           </div>
        </div>*/}
         {/*first row*/}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mt-10">

          <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center   border-2 border-amber-50 transition duration-300 transform hover:scale-105 hover:border-blue-400">
            <span className="font-sans text-xl text-amber-50 font-bold">Education</span>
            <FaGraduationCap className="text-3xl text-white mb-2" />
            <p className=" text-center font-sans text-xl text-amber-50">Information & Communication Technology undergraduate at Uva Wellassa University</p>
          </div>


          <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-amber-50 transition duration-300 transform hover:scale-105 hover:border-blue-400">
            <span className="font-sans text-xl text-amber-50 font-bold">Frontend Dev</span>
            <BiCodeAlt className="text-3xl text-white mb-2" />
            <p className=" text-center font-sans text-xl text-amber-50">Skilled in building responsive UIs using React, Tailwind CSS, and modern JavaScript</p>
          </div>


          <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-amber-50 transition duration-300 transform hover:scale-105 hover:border-blue-400">
            <span className="font-sans text-xl text-amber-50 font-bold">QA</span>
            <MdVerified className="text-3xl text-white mb-2" />
            <p className=" text-center font-sans text-xl text-amber-50">Passionate about testing and validation to ensure performance, accessibility, and bug-free functionality</p>       
          </div>
        </div>

          {/*second row*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mt-10">

          <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-amber-50 transition duration-300 transform hover:scale-105 hover:border-blue-400">
            
            <span className="font-sans text-xl text-amber-50 font-bold">Quick Learner</span>
            <FaBrain className="text-3xl text-white mb-2" />
            <p className=" text-center font-sans text-xl text-amber-50">Adaptable to new tools and frameworks with a drive for continuous improvement</p>       
          
          </div>

          <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-amber-50 transition duration-300 transform hover:scale-105 hover:border-blue-400">
            
            <span className="font-sans text-xl text-amber-50 font-bold">Creative Thinking</span>
            <GiLightBulb className="text-3xl text-white mb-2" />
            <p className=" text-center font-sans text-xl text-amber-50">Loves solving challenges with practical, user-focused solutions</p>       
          
          </div>

          <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center border-2 border-amber-50 transition duration-300 transform hover:scale-105 hover:border-blue-400">
            
            <span className="font-sans text-xl text-amber-50 font-bold">Team Player</span>
            <MdGroups className="text-3xl text-white mb-2" />
            <p className=" text-center font-sans text-xl text-amber-50">Strong communicator and collaborator, always eager to contribute to team success</p>       
          
          </div>

        </div>
        <br></br>
        <br></br>
    </section>
    
    </>
  
    
    
  )
}

export default about


