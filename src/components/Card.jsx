import { useEffect, useState, useContext } from 'react';
import { CardStyle, PokemonPresent } from './Styles.styles';
import { ThemeContext } from '../App';
import * as Svg from './svg/index';

export const Card = ({ pokemon, handleRemove, newCard, setNewCard }) => {
    const [img, setImg] = useState('');
    const { dark } = useContext(ThemeContext);

    useEffect(() => {
        if (pokemon.url) {
            fetch(pokemon.url).then(async res => {
                if (res.status === 200) {
                    const responce = await res.json();
                    setImg(responce.sprites.front_default);
                }
            });
        } else {
            setImg(pokemon.sprites.front_default);
        }
    }, [pokemon]);

    useEffect(
        () => setNewCard(state => ({ name: '' })),
        // eslint-disable-next-line
        [],
    );

    const closeHandle = () => {
        handleRemove(pokemon);
    };

    return (
        <>
            <CardStyle
                isNew={pokemon.name === newCard.name}
                dark={dark}>
                <PokemonPresent>
                    <img
                        src={img}
                        alt=''
                    />
                    <p>{pokemon.name}</p>
                </PokemonPresent>
                <div onClick={closeHandle}>
                    <Svg.Close dark={dark} />
                </div>
            </CardStyle>
        </>
    );
};
