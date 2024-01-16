import { createContext, useState } from 'react';
import { Main } from './components/Main';
import { Root } from './components/Styles.styles';

export const ThemeContext = createContext();

const App = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <ThemeContext.Provider value={{ dark: isOn, setIsOn }}>
            <Root dark={isOn}>
                <Main />
            </Root>
        </ThemeContext.Provider>
    );
};

export default App;
