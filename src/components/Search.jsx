import { useContext, memo, useCallback, useState } from 'react';
import { SearchContainer, Input, Button } from './Styles.styles';
import { ThemeContext } from '../App';

export const Search = memo(function Search({ handleFound, openModal }) {
    const [value, setValue] = useState('');
    const { dark } = useContext(ThemeContext);

    const handleSearch = useCallback(() => {
        if (!value) {
            openModal('Enter the pokemon');
            return;
        }
        fetch(
            `https://pokeapi.co/api/v2/pokemon/${value.toLocaleLowerCase()}`,
        ).then(async res => {
            if (res.status === 200) {
                const responce = await res.json();
                handleFound(responce);
            } else {
                openModal('Pokemon not found');
            }
        });
        setValue('');
    }, [value, handleFound, openModal]);

    return (
        <SearchContainer>
            <Input
                type='text'
                value={value}
                dark={dark}
                onChange={event => setValue(event.target.value)}
            />
            <Button onClick={handleSearch}>search</Button>
        </SearchContainer>
    );
});
