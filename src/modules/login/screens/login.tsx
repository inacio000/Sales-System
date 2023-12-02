import { View, Text, TextInput } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/input";
import Button from "../../../shared/components/button/Button";


const Login = () => {

    const handleOnPress = () => {
        console.log('Clicked...')
    }

    return (
        <View>
            <ContainerLogin>
                <Text>Login</Text>
                <Input />
                <Button margin="8px" onPress={handleOnPress} title="Login" />
            </ContainerLogin>
        </View>
    );
};

export default Login;