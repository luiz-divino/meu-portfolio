import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero bg-blue-600 h-screen flex items-center justify-center">
      <div className="font-sans md:font-serif text-center py-20 text-white">
        <h1 className="text-4xl">LUIZ FERNANDO</h1>
        <p className="mt-4 text-2xl pb-6">Desenvolvedor Full-stack junior</p>
      <a href="#about" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Sobre mim</a>
      </div>

      
    </section>
  );
}

export default Hero;