import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/PokeDex/reducer/pokeapiSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
