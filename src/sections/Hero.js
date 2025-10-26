import React from "react";
import imgBackground from "../assets/img/background.jpg"

function Hero() {
  return (
    <section className="hero h-screen flex items-center justify-center" style={{ backgroundImage: `url(${imgBackground})`, backgroundSize: 'cover' }}>
      <div className="font-sans font-bold md:font-serif text-center py-20 text-blue-600">
        <h1 className="text-4xl">LUIZ FERNANDO</h1>
        <p className="mt-4 text-2xl pb-6 font-semibold text-gray-900">Desenvolvedor Full-stack junior</p>
      <a href="#about" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-900 transition duration-300">Sobre mim</a>
      </div>

      
    </section>
  );
}

export default Hero;