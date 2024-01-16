import { configureStore } from '@reduxjs/toolkit';
import pokemonListReducer from './pokemonListSlice';

export const store = configureStore({
    reducer: {
        pokemonList: pokemonListReducer,
    },
});
