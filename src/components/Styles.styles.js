import styled, { keyframes, css } from 'styled-components';

export const Root = styled.div`
    background-image: ${({ dark }) =>
        dark ? 'url(./black.jpeg)' : 'url(./white.png)'};
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-color: ${({ dark }) => (dark ? 'black' : 'white')};
    min-height: 100vh;
`;

export const SearchContainer = styled.div`
    text-align: right;
    margin-right: 2.2em;
`;

export const Input = styled.input`
    color: grey;
    outline: none;
    padding: 0.5em;
    margin-top: 1em;
    border-radius: 4px;
    border: ${({ dark }) =>
        dark
            ? '2px solid rgba(250, 244, 55, 0.88)'
            : '2px solid rgb(108, 122, 137)'};
`;

export const Button = styled.button`
    margin-left: 1em;
    border-radius: 4px;
    padding: 0.5em 1em;
    background-color: rgba(250, 244, 55, 0.88);
    border: none;
    border: 3px solid rgba(250, 244, 55, 0.88);
`;

export const PokemonsContainer = styled.div`
    padding: 1em;
`;

const newCard = keyframes`
  from {
      background-color: rgb(249, 69, 74);
}
to {
      background-color: ${({ dark }) => (dark ? 'black' : 'white')};
  }
`;

export const CardStyle = styled.div`
    opacity: 1;
    margin: 1em;
    display: flex;
    padding: 0.5em;
    font-weight: 600;
    font-size: 1.3em;
    border-radius: 4px;
    background-color: ${({ dark }) => (dark ? 'black' : 'white')};
    color: ${({ dark }) => (dark ? 'white' : 'black')};
    align-items: center;
    border: ${({ dark }) =>
        dark ? '2px solid rgba(250, 244, 55, 0.88)' : '2px solid black'};
    justify-content: space-between;

    animation: ${props =>
        props.isNew &&
        css`
            ${newCard} 2s ease-in-out
        `};

    &:hover {
        background-color: rgba(255, 255, 255, 0.7);
    }
`;

export const PokemonPresent = styled.div`
    display: flex;
    align-items: center;
`;

export const CloseSvg = styled.svg`
    width: 45px;
    height: 45px;
    border-radius: 30px;

    &:hover {
        width: 47px;
        height: 47px;
        opacity: 3;
    }
`;

export const ModalContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(108, 122, 137, 0.2);
`;

export const ModalWindow = styled.div`
    width: 270px;
    height: 100px;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    background-color: white;
    border: 2px solid black;
`;

export const SwitchContainer = styled.div`
    position: absolute;
    display: flex;
    width: 120px;
    top: 12px;
    left: 35px;
    justify-content: space-between;
    align-items: center;
`;

export const Toggle = styled.div`
    width: 50px;
    height: 30px;
    border-radius: 15px;
    background-color: rgb(249, 69, 74);
    cursor: pointer;
`;

export const Circle = styled.div`
    margin-top: 3px;
    margin-left: ${({ dark }) => (dark ? 'calc(60% - 6px)' : '2px')};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${({ dark }) =>
        dark ? 'rgba(250, 244, 55, 0.88)' : '#fff'};
    transition: all 0.3s ease-in-out;
`;

export const SwitchSvg = styled.svg`
    width: 20px;
    height: 20px;
`;
