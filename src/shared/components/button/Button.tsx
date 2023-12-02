import { TouchableOpacityProps } from "react-native";
import { ContainerButton } from "./Button.style";
import Text from "../Text/Text";
import { theme } from "../../Theme/theme";
import { textType } from "../Text/TextType";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}

const Button = ({title, margin, ...props}: ButtonProps) => {

    return <ContainerButton margin={margin} {...props}>
        <Text color={theme.color.neutralTheme.white}>{title}</Text>
    </ContainerButton>
}

export default Button;