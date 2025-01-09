import { Link } from "react-router-dom";

export const PokemonList = ({ pokemon, children }) => {
    return (
        <div>
            <h2>Pokemon List</h2>
            <ul>
                {
                    pokemon.map(currentPokemon => (
                        <li key={currentPokemon.name}>
                            <Link to={`/pokemon/${currentPokemon._id}`}>{currentPokemon.name}</Link>
                        </li>
                    ))
                }
            </ul>
            {children}
        </div >
    );
};
