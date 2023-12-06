import { TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalViews.style";
import Text from "../Text/Text";
import { textTypes } from "../Text/TextTypes";
import { theme } from "../../Theme/Theme";

interface InputProps extends TextInputProps {
    title?: string
}

const Input = ({ title, ...props }: InputProps) => {

    return (
    <DisplayFlexColumn>
        {title && (
            <Text 
                margin="0px 0px 4px 8px"
                color={theme.colors.grayTheme.gray100} 
                type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}
            >
                {title}
            </Text>
        )}
        <ContainerInput {...props} />
    </DisplayFlexColumn>
)
}

export default Input;