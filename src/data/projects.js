import React from "react";
import projetoFutebol from "../assets/img/projetoFutebol.png"
import adivinhePersonagem from "../assets/img/projetoPersonagens.png"

 const projectsData = [
    {
        id:1,
        image: projetoFutebol,
        description: "Projeto desenvolvido em grupo durante o curso de Desenvolvimento Web da Trybe. O objetivo do projeto era desenvolver uma aplicação com back-end em Node.js, Express e Sequelize, e front-end em React e Redux, consumindo uma API RESTful para gerenciar um campeonato de futebol.",
    },
    {
        id:2,
        image: adivinhePersonagem,
        description: "Projeto desenvolvido em grupo durante o curso de Desenvolvimento Web da Trybe. O objetivo do projeto era desenvolver um jogo de adivinhação de personagens utilizando React, onde os jogadores tentam adivinhar o personagem secreto com base em pistas fornecidas.",
    }
];

export default projectsData;