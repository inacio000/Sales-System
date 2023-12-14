import { TextInputProps, View } from "react-native";
import { ContainerInput, IconEye } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalViews.style";
import Text from "../Text/Text";
import { textTypes } from "../Text/TextTypes";
import { theme } from "../../Theme/Theme";
import { useState } from "react";

interface InputProps extends TextInputProps {
    title?: string;
    errorMessage?: string;
    secureTextEntry?: boolean;
    margin?: string;
}

const Input = ({ margin, secureTextEntry, errorMessage, title, ...props }: InputProps) => {
    const [currentSecure, setCurrentSecure] = useState<boolean>(!!secureTextEntry)

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
                <ContainerInput hasSecureTextEntry={secureTextEntry} secureTextEntry={currentSecure} isError={!!errorMessage} {...props} />
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