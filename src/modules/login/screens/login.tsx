import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/Input/input";
import Button from "../../../shared/components/Button/Button";
import Text from "../../../shared/components/Text/Text";
import { textTypes } from "../../../shared/components/Text/TextTypes";
import { theme } from "../../../shared/Theme/Theme";


const Login = () => {

    const handleOnPress = () => {
        console.log('Clicked...')
    }

    return (
        <View>
            <ContainerLogin>
                <Text type={textTypes.TITLE_BOLD}>IMR</Text>
                <Input 
                    
                    placeholder="Enter your email" 
                    title="Email:"
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