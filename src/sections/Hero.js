import React from "react";
import imgBackground from "../assets/img/background.jpg"

function Hero() {
  return (
    <section id="home" className="hero h-screen flex items-center justify-center" style={{ backgroundImage: `url(${imgBackground})`, backgroundSize: 'cover' }}>
      <div className="font-sans font-bold md:font-serif text-center py-20 text-blue-600 ">

        <div className="flex text-center">
          <p className="bg-yellow-600 border border-red-50 rounded w-20 text-2xl mb-5 mr-3">Hello</p>
           <p className="text-2xl">I'm</p>
        </div>

        <h1 className="nome text-4xl">LUIZ FERNANDO</h1>

        <p className="mt-4 text-2xl pb-6 font-bold text-blue-600">Software <span className="text-yellow-600">Engineer</span></p>

        <a href="#about" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition duration-300">Sobre mim</a>
      </div>


    </section>
  );
}

export default Hero;