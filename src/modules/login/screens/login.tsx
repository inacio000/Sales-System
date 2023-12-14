import { View } from "react-native"
import { ContainerLogin, Imagelogo } from "../styles/login.style";
import Input from "../../../shared/components/Input/input";
import Button from "../../../shared/components/Button/Button";
import Text from "../../../shared/components/Text/Text";
import { textTypes } from "../../../shared/components/Text/TextTypes";
import { theme } from "../../../shared/Theme/Theme";
import { Icon } from "../../../shared/components/Icon/Icon";


const Login = () => {

    const handleOnPress = () => {
        console.log('Clicked...')
    }

    return (
        <View>
            <ContainerLogin>
                <Imagelogo source={require('../../../assets/images/logo.png')} />
                {/* <Icon name="home" color={theme.colors.purpleTheme.purple80} size={24} /> */}
                {/* <Text type={textTypes.TITLE_BOLD}>IMR</Text> */}
                <Input
                    margin="0px 0px 8px 0px"
                    placeholder="Enter your email"
                    title="Email:"
                />
                <Input
                    secureTextEntry
                    placeholder="Enter your password"
                    title="Password:"
                />
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    margin="16px"
                    title="Login"
                    onPress={handleOnPress}
                />
            </ContainerLogin>
        </View>
    );
};

export default Login;