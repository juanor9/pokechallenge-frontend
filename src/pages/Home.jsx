/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery, gql } from '@apollo/client';

const HomePage = () => {
  const GET_POKEMON = gql`
  query samplePokeAPIquery {
  pokemon_v2_pokemon {
    id
    name
    pokemon_v2_pokemonsprites {
      sprites
    }
  }
}
`;

  const { loading, error, data } = useQuery(GET_POKEMON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  const allPokemon = data.pokemon_v2_pokemon;
  return (
    <main>
      <h1>PokéChallenge</h1>
      <p>Try drawing all pokémon, one daily... or whenever you can.</p>
      {allPokemon && Array.isArray(allPokemon)
        ? allPokemon.map((pokemon) => (
          <article>
            <h5>{pokemon.name}</h5>
          </article>
        ))
        : null}
    </main>
  );
};

export default HomePage;
