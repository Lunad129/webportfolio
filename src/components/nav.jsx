//import { FaMoon } from 'react-icons/fa';

const nav = () => {
  return (
    <>
    <div>
 <div  className="bg-blue-950 flex flex-col items-center p-10 text-white font-mono text-5xl "> 
       {/*<div> 
       <a href="#" className=" font-mono text-3xl tracking-wider flex items-center"><FaMoon/>LUNA</a>     
        </div>*/}
       
    <div className="space-x-4 font-mono text-2xl flex justify-center">
            <a href="#my" className="  text-white hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Home</a>
            <a href="#about" className="  text-white hover:bg-blue-900 rounded-full px-5 py-2 text-xl">About</a>
            <a href="#skills" className="  text-white hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Skills</a>
            <a href="#" className="text-white hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Projects</a>
            <a href="#" className="text-white hover:bg-blue-900 rounded-full px-5 py-2 text-xl">Contact</a>

    </div>
    </div>
  
    </div>
    </>
  )
}
export default nav