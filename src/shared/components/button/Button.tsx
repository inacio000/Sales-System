import { TouchableOpacityProps } from "react-native";
import { ContainerButton, GradientButton, SecondaryButton } from "./Button.style";
import Text from "../Text/Text";
import { theme } from "../../Theme/Theme";
import { textType } from "../Text/TextType";
import LinearGradient from "react-native-linear-gradient";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
}

const Button = ({ title, type, margin, ...props }: ButtonProps) => {
    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return <SecondaryButton margin={margin} {...props}>
                <Text type={textType.BUTTON_REGULAR} color={theme.colors.mainTheme.primary}>
                    {title}
                </Text>
            </SecondaryButton>;



        case theme.buttons.buttonsTheme.primary:
        default:
            return <ContainerButton margin={margin} {...props}>
                <GradientButton 
                    start={{x: 0.0, y: 0.0}} 
                    end={{x: 1.0, y: 1.0}} 
                    colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
                >
                    <Text type={textType.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>{title}</Text>
                </GradientButton>
            </ContainerButton>
    };
}

export default Button;