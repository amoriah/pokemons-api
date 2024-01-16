import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import * as Components from './index';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonList } from '../store/pokemonListSlice';

export const Main = memo(function Main() {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemonList);
    const [isModal, setIsModal] = useState(false);
    const [message, setMessage] = useState('An empty window :)');
    const [newCard, setNewCard] = useState({ name: '' });

    const openModal = useCallback(message => {
        setMessage(message);
        setIsModal(true);
    }, []);

    const closeModal = () => {
        setIsModal(false);
    };

    const handleRemove = useCallback(
        pakemon => {
            if (pakemon) {
                const newArr = pokemons.filter(p => p !== pakemon);
                dispatch(setPokemonList(newArr));
            }
        },
        [pokemons, dispatch],
    );

    const handleFound = useCallback(
        searchResult => {
            if (searchResult) {
                const foundPokemon = pokemons.find(p => {
                    return p.name === searchResult.name;
                });
                if (foundPokemon) {
                    const newArr = pokemons.filter(p => p !== foundPokemon);
                    openModal('Pokemon already in the list');
                    dispatch(setPokemonList([foundPokemon, ...newArr]));
                } else {
                    fetch(
                        `https://pokeapi.co/api/v2/pokemon/${searchResult.name}`,
                    ).then(async res => {
                        if (res.status === 200) {
                            const responce = await res.json();

                            const name = responce.name;
                            setNewCard(state => (state.name = name));
                            dispatch(setPokemonList([responce, ...pokemons]));
                        } else {
                            openModal('Error :)');
                        }
                    });
                }
            }
        },
        [pokemons, openModal, dispatch],
    );

    useEffect(() => {
        const cachedPokemons = localStorage.getItem('pokemons');
        if (cachedPokemons) {
            dispatch(setPokemonList(JSON.parse(cachedPokemons)));
            // [ CHECK ex2 ]
        } else {
            console.log('fetch pokemons');

            fetch('https://pokeapi.co/api/v2/pokemon/', {
                method: 'get',
            }).then(async obj => {
                const responce = await obj.json();
                dispatch(setPokemonList(responce.results));
                localStorage.setItem(
                    'pokemons',
                    JSON.stringify(responce.results),
                );
            });
        }
    }, [dispatch]);

    const pokemonsList = useMemo(() => {
        return pokemons.map((p, i) => (
            <Components.Card
                pokemon={p}
                newCard={newCard}
                key={i}
                setNewCard={setNewCard}
                handleRemove={handleRemove}
            />
        ));
        // eslint-disable-next-line
    }, [pokemons, handleRemove]);

    return (
        <>
            <Components.Switch />
            <Components.Modal
                isOpen={isModal}
                onClose={closeModal}
                message={message}
            />
            <Components.Search
                handleFound={handleFound}
                openModal={openModal}
            />
            <Components.PokemonsContainer>
                {pokemonsList}
            </Components.PokemonsContainer>
        </>
    );
});
