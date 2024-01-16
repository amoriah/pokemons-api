import { createSlice } from '@reduxjs/toolkit';

const pokemonListSlice = createSlice({
    name: 'pokemonList',
    initialState: [],
    reducers: {
        setPokemonList: (state, action) => {
            return [...action.payload];
        },
    },
});

export const { setPokemonList, addIsNewProperty } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
