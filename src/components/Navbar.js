import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-custom-darkNavy p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">Prueba Técnica</Link>
                <div>
                    <Link to="/" className="text-white px-4 hover:underline">Inicio</Link>
                    <Link to="/about" className="text-white px-4 hover:underline">Acerca de Mí</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;