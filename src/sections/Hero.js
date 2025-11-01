import React from "react";
import imgBackground from "../assets/img/background.jpg"
import curriculo from "../assets/img/curriculo.png"

function Hero() {
  const caminhoDoCV = './meu-curriculo.pdf'
  return (
    <section id="home" className="hero h-screen flex items-center justify-center" style={{ backgroundImage: `url(${imgBackground})`, backgroundSize: 'cover' }}>
      <div className="font-sans font-bold md:font-serif text-center py-20 text-blue-600 ">

        <div className="flex justify-center">
          <p className="bg-yellow-600 border border-red-50 rounded w-20 text-2xl mb-5 mr-3">Hello</p>
          <p className="text-2xl">I'm</p>
        </div>

        <h1 className="nome text-5xl">LUIZ FERNANDO</h1>

        <p className="mt-4 text-2xl pb-6 font-bold text-blue-600">Software <span className="text-yellow-600">Engineer</span></p>

        <div className="flex justify-center">
          <a href={caminhoDoCV}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver meu currículo (PDF)"
            className="px-4 py-2 text-white rounded">
            <img src={curriculo} className="w-12 h-12 hover:scale-50 transition duration-300" alt="icon de curriculo" />
          </a>
        </div>

      </div>


    </section>
  );
}

export default Hero;