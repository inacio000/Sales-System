import { TouchableOpacityProps } from "react-native";
import { ActiveIndicatorButton, ContainerButton, DisabledButton, GradientButton, SecondaryButton } from "./Button.style";
import Text from "../Text/Text";
import { theme } from "../../Theme/Theme";
import { textTypes } from "../Text/TextTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
}

const Button = ({ title, type, loading, disabled, margin, onPress, ...props }: ButtonProps) => {

    const handleOnPress = () => {
        if (!loading && !disabled && onPress) {
            onPress();
        }
    }

    const renderText = (color: string) => (
        <>
            <Text type={textTypes.PARAGRAPH_SEMI_BOLD} color={color}>
                {title}
            </Text>
            {loading && (
                <ActiveIndicatorButton color={theme.colors.neutralTheme.white} />
            )}
        </>
    );

    if (disabled) {
        return (
            <DisabledButton {...props} margin={margin}>
                    {renderText(theme.colors.neutralTheme.white)}
            </DisabledButton>
        )
    };

    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <SecondaryButton {...props} margin={margin} onPress={handleOnPress}>
                    {renderText(theme.colors.mainTheme.primary)}
                </SecondaryButton>
            );

        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ContainerButton {...props} margin={margin} onPress={handleOnPress}>
                    <GradientButton
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
                    >
                        {renderText(theme.colors.neutralTheme.white)}
                    </GradientButton>
                </ContainerButton>
            );
    };
}

export default Button;