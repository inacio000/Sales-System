import { NativeSyntheticEvent, TextInputChangeEventData, TextInputProps, View } from "react-native";
import { ContainerInput, IconEye } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalViews.style";
import Text from "../Text/Text";
import { textTypes } from "../Text/TextTypes";
import { theme } from "../../Theme/Theme";
import { useState } from "react";
import { insertMaskInCpf } from "../../Functions/cpfMask";
import { insertMaskInPhone } from "../../Functions/phoneMask";

interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    margin?: string;
    type?: 'cell-phone' | 'cpf';
}

const Input = ({ margin, secureTextEntry, errorMessage, title, type, onChange, ...props }: InputProps) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry)


    const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        if (onChange) {
            let text = event.nativeEvent.text;
            switch (type) {
                case 'cpf':
                    text = insertMaskInCpf(text)
                    break;
                case 'cell-phone':
                    text = insertMaskInPhone(text)
                    break;
            
                default:
                    text = event.nativeEvent.text;
                    break;
            }
            
            onChange({
                ...event,
                nativeEvent: {
                    ...event.nativeEvent,
                    text
                },
            });
        }
    }
    const handleOnPressEye = () => {
        setCurrentSecure((current) => !current)
    }

    return (
        <DisplayFlexColumn margin={margin}>
            {title && (
                <Text
                    margin="0px 0px 4px 8px"
                    color={theme.colors.grayTheme.gray100}
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
                >
                    {title}
                </Text>
            )}
            <View>
                <ContainerInput 
                    {...props} 
                    hasSecureTextEntry={secureTextEntry} 
                    secureTextEntry={currentSecure} 
                    isError={!!errorMessage} 
                    onChange={handleOnChange}
                />
                    {secureTextEntry && <IconEye onPress={handleOnPressEye} name={currentSecure ? "eye" : "eye-blocked"} size={20} />}
            </View>
            {errorMessage && (
                <Text
                    margin="0px 0px 0px 8px"
                    color={theme.colors.orangeTheme.orange80}
                    type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
                >
                    {errorMessage}
                </Text>
            )}
        </DisplayFlexColumn>
    )
}

export default Input;