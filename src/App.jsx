// src/App.jsx
import { useState } from 'react';
import { PokemonList } from './components/PokemonList';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import PokemonDetails from './components/PokemonDetails';
import PokemonForm from './components/PokemonForm';
import PageNotFound from './components/PageNotFound';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = newPokemon => {
    setPokemon([...pokemon, { ...newPokemon, _id: pokemon.length + 1 }]);
  };

  return (
    <>
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <h1>Home Page, Don't take me out of my element</h1>
          }
        />
        <Route
          path='/pokemon'
          element={
            <PokemonList pokemon={pokemon}>
              <button>Test Child Button</button>
            </PokemonList>
          }
        />
        <Route
          path='/pokemon/:pokemonId'
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route
          path='/pokemon/new'
          element={<PokemonForm addPokemon={addPokemon} />}
        />
        <Route
          path='*'
          element={< PageNotFound />}
        />
      </Routes>
    </>
  );
};

export default App;