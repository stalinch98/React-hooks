import React, { useState, useEffect } from 'react';

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, []);

    return (
        <div className="Characters">
            {characters.map((character) => (
                    <>
                        <img src={character.image} alt="" />
                        <h2>{character.name}</h2>
                        <h1>{character.status}</h1>
                    </>
            ))}
        </div>
    );
}

export default Characters;