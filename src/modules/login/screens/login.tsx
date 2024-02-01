import { TouchableOpacity, View } from "react-native"
import { ContainerLogin, Imagelogo } from "../styles/login.style";
import Input from "../../../shared/components/Input/input";
import Button from "../../../shared/components/Button/Button";
import { theme } from "../../../shared/Theme/Theme";
import { useLogin } from "../hook/useLogin";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { connectionAPIGet } from "../../../shared/Functions/Connection/ConnectionAPI";
import { URL_USER } from "../../../shared/Constants/urls";
import { UserType } from "../../../shared/types/userType";
import Text from "../../../shared/components/Text/Text";
import { textTypes } from "../../../shared/components/Text/TextTypes";

const Login = () => {

    // const navigation = useNavigation();

    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnChangeEmail,
        handleOnChangePassword,
        handleGoToCreateUser,
    } = useLogin();

    // useEffect(() => {
    //     const test = async () => {
    //         const resultBack = await connectionAPIGet<UserType>(URL_USER).catch(() => undefined);
    //         console.log(resultBack)

    //         if(resultBack) {
    //             navigation.navigate(MenuUrl.HOME)
    //         }
    //     };

    //     test();
    // }, []);

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
                <TouchableOpacity onPress={handleGoToCreateUser}>
                    <Text margin="16px" type={textTypes.PARAGRAPH_SEMI_BOLD} color={theme.colors.mainTheme.primary}>Sign Up</Text>
                </TouchableOpacity>
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    title="Login"
                    onPress={handleOnPress}
                    loading={loading}
                />
            </ContainerLogin>
        </View>
    );
};

export default Login;