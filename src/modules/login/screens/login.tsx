import { View } from "react-native"
import { ContainerLogin, Imagelogo } from "../styles/login.style";
import Input from "../../../shared/components/Input/input";
import Button from "../../../shared/components/Button/Button";
import { theme } from "../../../shared/Theme/Theme";
import { useLogin } from "../hook/useLogin";

const Login = () => {

    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
    } = useLogin();

    return (
        <View>
            <ContainerLogin>
                <Imagelogo source={require('../../../assets/images/logo.png')} />
                <Input
                    margin="0px 0px 8px 0px"
                    placeholder="Enter your email"
                    title="Email:"
                    value={email}
                    errorMessage={errorMessage}
                    onChange={handleOnChangeEmail}
                />
                <Input
                    secureTextEntry
                    placeholder="Enter your password"
                    title="Password:"
                    value={password}
                    errorMessage={errorMessage}
                    onChange={handleOnChangePassword}
                />
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    margin="16px"
                    title="Login"
                    onPress={handleOnPress}
                    loading={loading}
                />
            </ContainerLogin>
        </View>
    );
};

export default Login;