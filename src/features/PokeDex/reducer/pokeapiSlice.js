/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getAllPokemon from '../services/pokeapi';

const initialState = {
  pokemon: [],
};

const pokemonSlice = createSlice(
  {
    name: 'pokemon',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getAllPokemon.fulfilled, (state, action) => {
        state.pokemon = action.payload;
      });
    },
  },
);

export default pokemonSlice.reducer;
