import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_h95ndh4',
      'template_3ftbxai',
      form.current,
      'izwsp8znjwg0vD98W'
    ).then(() => {
      setSent(true);
      form.current.reset();
    }, () => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="bg-cyan-900 flex flex-col items-center min-h-[40vh] py-10">
      <h1 className="font-mono text-amber-50 text-3xl text-center mb-8 font-bold mt-6">Contact Me</h1>
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mt-6">
        {/* Left: Contact Form */}
        <div className="flex-1 bg-cyan-950/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-cyan-800">
          <p className="text-lg text-amber-50 mb-6">Send me a message directly:</p>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input name="user_name" type="text" placeholder="Your Name" required className="w-full p-3 rounded bg-cyan-900/60 text-amber-50 border border-cyan-800" />
            <input name="user_email" type="email" placeholder="Your Email" required className="w-full p-3 rounded bg-cyan-900/60 text-amber-50 border border-cyan-800" />
            <textarea name="message" placeholder="Your Message" required className="w-full p-3 rounded bg-cyan-900/60 text-amber-50 border border-cyan-800" rows={4}></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition">Send</button>
            {sent && <p className="text-green-400 mt-2">Message sent!</p>}
          </form>
        </div>
        {/* Right: Contact Links */}
        <div className="flex-1 bg-cyan-950/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-cyan-800 flex flex-col gap-6 justify-center">
          <p className="text-lg text-amber-50 mb-2">Or reach out via:</p>
          <a
            href="mailto:shashihemachandra129@gmail.com"
            className="flex items-center gap-4 bg-cyan-900/60 border border-cyan-800 rounded-xl p-4 transition hover:bg-cyan-900/80 focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail className="text-3xl text-blue-400" />
            <div>
              <div className="text-lg font-bold text-amber-50">Email</div>
              <div className="text-amber-100 text-base">shashihemachandra129@gmail.com</div>
            </div>
          </a>
          <a
            href="https://github.com/Lunad129"
            className="flex items-center gap-4 bg-cyan-900/60 border border-cyan-800 rounded-xl p-4 transition hover:bg-cyan-900/80 focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-blue-400" />
            <div>
              <div className="text-lg font-bold text-amber-50">GitHub</div>
              <div className="text-amber-100 text-base">github.com/Lunad129</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/shashika-dulani"
            className="flex items-center gap-4 bg-cyan-900/60 border border-cyan-800 rounded-xl p-4 transition hover:bg-cyan-900/80 focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-blue-400" />
            <div>
              <div className="text-lg font-bold text-amber-50">LinkedIn</div>
              <div className="text-amber-100 text-base">linkedin.com/in/shashika-dulani</div>
            </div>
          </a>
          <a
            href="tel:0761089923"
            className="flex items-center gap-4 bg-cyan-900/60 border border-cyan-800 rounded-xl p-4 transition hover:bg-cyan-900/80 focus:outline-none"
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

export default Contact