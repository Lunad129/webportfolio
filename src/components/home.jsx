import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Myimg from'../assets/myimg.png';
import { FaFileDownload } from "react-icons/fa";



const home = () => {
  return (
    <section id="my" className='bg-cyan-900 flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white font-mono mt-20 '>
        <div>
        <p className="text-2xl">I'm</p>
        <h1 className="text-4xl font-bold">Dulani Hemachandra</h1>
        <br></br>
        <p className="text-2xl">Passionate about front-end development and quality assurance.</p>
        <br></br>
        <br></br>
        <div className="flex space-x-8 text-2xl text-white">
        <a href="https://github.com/Lunad129" target="_blank" className="hover:text-cyan-300 transition duration-300 transform hover:scale-110 rounded-full border-4 px-2 py-2" ><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shashika-dulani" target="_blank" className="hover:text-cyan-300 transition duration-300 transform hover:scale-110 rounded-full border-4 px-2 py-2" ><FaLinkedin/></a>
        <a href="mailto:shashihemachandra129@gmail.com" target="_blank" className="hover:text-cyan-300 transition duration-300 transform hover:scale-110 rounded-full border-4 px-2 py-2" ><MdEmail/></a>
        <a href="tel:+940761089923"  target="_blank" className="hover:text-cyan-300 transition duration-300 transform hover:scale-110 rounded-full border-4 px-2 py-2"><FaPhone/></a>
        </div>

        <a href="/QA Intern.pdf"
           download
           className="mt-8 inline-flex items-center gap-3 bg-cyan-950/70 text-heading px-6 py-2 rounded-lg font-semibold shadow hover:bg-accent hover:text-primary  border-2 border- border-cyan-800 transition duration-300 hover:bg-cyan-900/60  hover:border-cyan-700 hover:border-2">
           <FaFileDownload className="text-amber-50 text-2xl" />
           <span>Download CV</span>
        </a>

       
       
        
        </div>

        
        <div>
            <img src={Myimg} alt="Dulani" className="object-cover w-[450px] h-full bg-cyan-200 rounded-full" />
        </div>
        
    </section>
    
  )
}

export default home 