import { createAsyncThunk } from '@reduxjs/toolkit';

const pokeApi = 'https://pokeapi.co/api/v2';

const getAllPokemon = createAsyncThunk(
  'pokemon/getAllPokemon',
  async () => {
    const options = {
      method: 'GET',
      mode: 'no-cors',
    };
    try {
      const res = await fetch(`${pokeApi}/pokemon`, options);
      console.log(res);
      // const result = await res.json();
      // return result;
      return res;
    } catch (error) {
      return console.error('Error fetching data:', error);
    }
  },
);

export default getAllPokemon;
