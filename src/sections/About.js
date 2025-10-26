import React from "react";

function About() {
    return (
        <div id="about">
            <section className="h-screen px-5 flex flex-col justify-center items-center bg-gray-100 text-gray-800">
                <h2 className="text-3xl mb-6 font-semibold">Sobre Mim</h2>
                <p className="text-lg">
                    Sou um desenvolvedor full-stack júnior com uma paixão por arquitetar soluções web completas. Atualmente com 20 anos e cursando Engenharia de Software, eu trago uma mentalidade estruturada para o desenvolvimento, sempre buscando escrever códigos limpos, eficientes e escaláveis.
                    Meu foco é dominar todo o ecossistema web, desde a criação de interfaces de usuário ricas (front-end) até a implementação da lógica de negócios e bancos de dados (back-end). Estou sempre pronto para mergulhar em novos desafios e aprender continuamente.
                </p>
            </section>
        </div>
    )
}

export default About;