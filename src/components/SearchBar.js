import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <input 
            type="text" 
            placeholder="Buscar por título o contenido" 
            className="border p-2 my-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
        />
    );
};

export default SearchBar;