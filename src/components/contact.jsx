import React from 'react'

const contact = () => {
  return (
    <section  id="Contact" className="bg-blue-950 flex flex-col justify-center items-center min-h-[40vh]">
        <h1 className="font-mono text-amber-50 text-3xl text-center mb-6 font-bold mt-5">Contact me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Project 1 */}
            <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
            <span className="font-sans text-xl text-amber-50 font-bold mb-4">Project 1</span>
            <p className="text-amber-50 text-center">Description of your first project goes here.</p>
            </div>
        {/* Project 2 */}
            <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col items-center">
            <span className="font-sans text-xl text-amber-50 font-bold mb-4">Project 2</span>
            <p className="text-amber-50 text-center">Description of your second project goes here.</p>
            </div>
        </div>
    </section>
  )
}

export default contact