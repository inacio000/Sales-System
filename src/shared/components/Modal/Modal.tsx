import { Alert, Modal as ModalReact, ModalProps as ModalPropsReact, Pressable, View } from 'react-native';
import { ContainerModal, IconCloseModal } from './Modal.style';
import Text from '../Text/Text';
import { theme } from '../../Theme/Theme';
import { textTypes } from '../Text/TextTypes';
import Button from '../Button/Button';

interface ModalProps extends ModalPropsReact {
    title: string;
    text: string;
    onCloseModal: () => void;
}

const Modal = ({ title, text, onCloseModal, ...props }: ModalProps) => {

    return (
        <ModalReact
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                onCloseModal();
            }}
            {...props}
        >
            <ContainerModal>
                <Text type={textTypes.PARAGRAPH_SEMI_BOLD} color={theme.colors.mainTheme.primary} margin="24px">
                    {title}
                </Text>
                <Text>{text}</Text>
                <Button title='Ok' onPress={onCloseModal} />
                <IconCloseModal onPress={onCloseModal} name="cross" />
            </ContainerModal>
        </ModalReact>
    )
}

export default Modal;