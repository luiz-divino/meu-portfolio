import React from 'react';
import background from '../assets/img/background.jpg';

function Contact() {
    return (
        <section id="contact" className="h-full flex items-center justify-center pb-20 bg-gray-100" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center my-11 text-blue-600">Entre em Contato</h2>
                <div className="max-w-3xl mx-auto">
                    <form action="https://formspree.io/f/xyzroaqk" method="POST" className="bg-white rounded-lg shadow-lg p-10">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
                            <input type="text" id="name" name="name" placeholder="Seu nome" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" placeholder="Seu email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem</label>
                            <textarea id="message" name="message" placeholder="Sua mensagem" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;