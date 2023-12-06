import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/Input/input";
import Button from "../../../shared/components/Button/Button";
import Text from "../../../shared/components/Text/Text";
import { textType } from "../../../shared/components/Text/TextType";
import { theme } from "../../../shared/Theme/Theme";


const Login = () => {

    const handleOnPress = () => {
        console.log('Clicked...')
    }

    return (
        <View>
            <ContainerLogin>
                <Text type={textType.TITLE_BOLD}>Login</Text>
                <Input />
                <Button type={theme.buttons.buttonsTheme.primary} margin="8px" onPress={handleOnPress} title="Login" />
            </ContainerLogin>
        </View>
    );
};

export default Login;