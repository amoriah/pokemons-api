import { ModalWindow, ModalContainer, Button } from './Styles.styles';

export const Modal = ({ isOpen, onClose, message }) => {
    return (
        <>
            {isOpen && (
                <ModalContainer>
                    <ModalWindow>
                        <p>{message}</p>
                        <Button onClick={onClose}>close</Button>
                    </ModalWindow>
                </ModalContainer>
            )}
        </>
    );
};
