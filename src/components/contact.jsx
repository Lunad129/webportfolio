import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const contact = () => {
  return (
    <section id="contact" className="bg-cyan-900 flex flex-col justify-center items-center min-h-[40vh] py-10">
        <h1 className="font-mono text-amber-50 text-3xl text-center mb-6 font-bold mt-6">Contact Me</h1>
      <div className="bg-cyan-950/70 backdrop-blur-md rounded-2xl shadow-2xl p-10 w-full max-w-2xl mx-auto border border-cyan-800 mt-5">
        
        <p className="text-lg text-amber-100 mb-8">Reach out to me through any of the following platforms:</p>
        
        <div className="space-y-6">
          {/* Email */}
          <a
            href="mailto:shashihemachandra129@gmail.com"
            className="flex items-center gap-4 bg-cyan-900/60 border border-cyan-800 rounded-xl p-5 transition hover:bg-cyan-900/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="text-3xl text-blue-400" />
            <div>
              <div className="text-lg font-bold text-amber-50">Email</div>
              <div className="text-amber-100 text-base">shashihemachandra129@gmail.com</div>
            </div>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Lunad129"
            className="flex items-center gap-4 bg-cyan-900/60 border border-cyan-800 rounded-xl p-5 transition hover:bg-cyan-900/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-blue-400" />
            <div>
              <div className="text-lg font-bold text-amber-50">GitHub</div>
              <div className="text-amber-100 text-base">github.com/Lunad129</div>
            </div>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shashika-dulani"
            className="flex items-center gap-4 bg-cyan-900/60 border border-cyan-800 rounded-xl p-5 transition hover:bg-cyan-900/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-blue-400" />
            <div>
              <div className="text-lg font-bold text-amber-50">LinkedIn</div>
              <div className="text-amber-100 text-base">https://www.linkedin.com/in/shashika-dulani</div>
            </div>
          </a>
          {/* Mobile Number */}
          <a
            href="tel:0761089923"
            className="flex items-center gap-4 bg-cyan-900/60 border border-cyan-800 rounded-xl p-5 transition hover:bg-cyan-900/80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FaPhoneAlt className="text-3xl text-blue-400" />
            <div>
              <div className="text-lg font-bold text-amber-50">Mobile Number</div>
              <div className="text-amber-100 text-base">0761089923</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default contact