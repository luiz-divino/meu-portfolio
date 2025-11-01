import React from "react";
import Linkedin from "../assets/img/linkedin.svg";
import Github from "../assets/img/githubProfile.svg";

function About() {
    return (
        <div id="about">
            <section className="h-auto flex items-center justify-center flex-col gap-6 px-6 text-justify py-10">
                <h2 className="text-4xl font-bold">Sobre Mim</h2>
                <p className="text-lg">
                    Sou um desenvolvedor full-stack júnior com uma paixão por arquitetar soluções web completas. Atualmente com 20 anos e cursando Engenharia de Software, eu trago uma mentalidade estruturada para o desenvolvimento, sempre buscando escrever códigos limpos, eficientes e escaláveis.
                    Meu foco é dominar todo o ecossistema web, desde a criação de interfaces de usuário ricas (front-end) até a implementação da lógica de negócios e bancos de dados (back-end). Estou sempre pronto para mergulhar em novos desafios e aprender continuamente.
                </p>

                <div className='flex items-center justify-center flex-col mt-6'>
                    <h3 className="text-2xl font-bold">Veja mais sobre mim!</h3>

                    <div className="flex items-center justify-center mt-4">
                        <a href="https://www.linkedin.com/in/luizsdivino/" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 mr-4">
                            <img src={Linkedin} alt="LinkedIn" className="w-12 h-12 hover:opacity-75 transition-opacity" />
                        </a>
                        <a href="https://github.com/luiz-divino" target="_blank" rel="noopener noreferrer" className="inline-block mt-6">
                            <img src={Github} alt="GitHub" className="w-12 h-12 hover:opacity-75 transition-opacity" />
                        </a>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default About;