import { useParams } from "react-router-dom";

const PokemonDetails = (props) => {
  console.log("Will be ok pokemons, I'm pretty sure", props);

  // We can get URL params by using the useParams hook
  const { pokemonId } = useParams();
  console.log(pokemonId);

  const singlePokemon = props.pokemon.find(poke => poke._id === Number(pokemonId));
  console.log('Pokemon Object:', singlePokemon)

  return (
    <div>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </div>
  )
}

export default PokemonDetails