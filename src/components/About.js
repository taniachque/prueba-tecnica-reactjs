import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-custom-lightBlue shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-bold text-custom-blue mb-4">Acerca de Mí</h2>
            <div className="flex justify-center mb-4">
                <img 
                    src="/images/taniachoque.jpg"
                    alt="Foto de Tania Gisela Choque Condori"
                    className="w-64 h-64 rounded-full object-cover"
                />
            </div>
            <p className="text-gray-800 mb-4">
                Soy Tania Gisela Choque Condori, Ingeniera de Sistemas y Desarrolladora Web con formación académica y experiencia en el desarrollo de aplicaciones web. Egresada de la Universidad Tecnológica Boliviana, he complementado mi educación con especializaciones en Seguridad Informática y Medicina. Mi trayectoria profesional incluye pasantías y voluntariados en proyectos innovadores, donde he trabajado con tecnologías como React.js, Laravel y PostgreSQL. Además, tengo habilidades en gestión de proyectos y trabajo en equipo, lo que me ha permitido contribuir a diversas iniciativas en el ámbito del desarrollo web. Soy una profesional proactiva, apasionada por la tecnología y el aprendizaje continuo, con un enfoque en ofrecer soluciones efectivas y mejorar la experiencia del usuario.
            </p>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Mi Currículum</h3>
            <a 
                href="/files/CV_TANIACHOQUE_2024_dec.pdf"
                download
                className="inline-block bg-custom-darkNavy text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
                Descargar CV
            </a>
        </div>
    );
};

export default About;