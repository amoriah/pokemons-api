import { useContext } from 'react';
import { Toggle, Circle, SwitchContainer } from './Styles.styles';
import { ThemeContext } from '../App';
import * as Svg from './svg/index';

export const Switch = () => {
    const { dark, setIsOn } = useContext(ThemeContext);

    const handleClick = () => {
        setIsOn(!dark);
    };
    return (
        <SwitchContainer>
            <Svg.Sun dark={dark} />
            <Toggle onClick={handleClick}>
                <Circle dark={dark} />
            </Toggle>
            <Svg.Lune dark={dark} />
        </SwitchContainer>
    );
};
