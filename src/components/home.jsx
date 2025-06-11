import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Myimg from'../assets/myimg.png';

const home = () => {
  return (
    <section id="my" className='bg-blue-950 flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white font-mono'>
        <div>
        <p className="text-2xl">I'm</p>
        <h1 className="text-4xl font-bold">Dulani Hemachandra</h1>
        <br></br>
        <p className="text-2xl">Passionate about front-end development and quality assurance.</p>
        <br></br>
        <br></br>
        <div className="flex space-x-8 text-2xl text-white">
        <a href="https://github.com/Lunad129"  className="hover:text-blue-900 transition duration-300 transform hover:scale-110 rounded-full border-4 px-2 py-2" ><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shashika-dulani" className="hover:text-blue-900 transition duration-300 transform hover:scale-110 rounded-full border-4 px-2 py-2" ><FaLinkedin/></a>
        <a href="mailto:shashihemachandra129@gmail.com" className="hover:text-blue-900 transition duration-300 transform hover:scale-110 rounded-full border-4 px-2 py-2" ><MdEmail/></a>
        <a href="tel:+940761089923" className="hover:text-blue-900 transition duration-300 transform hover:scale-110 rounded-full border-4 px-2 py-2"><FaPhone/></a>
        </div>
        </div>

        
        <motion.div
            className="overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] bg-light-primary/20"
            animate={{
              borderRadius: [
                "50% 50% 50% 50%",
                "60% 40% 30% 70%",
                "40% 60% 70% 30%",
                "70% 30% 50% 50%",
                "50% 50% 50% 50%"
              ],
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <img src={Myimg} alt="Dulani" className="object-cover w-full h-full bg-gray-400" />
          </motion.div>
        
    </section>
    
  )
}

export default home 