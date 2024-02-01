import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import Button from "../../../shared/components/Button/Button";
import Text from "../../../shared/components/Text/Text";
import { logout } from "../../../shared/Functions/Connection/auth";
import { View } from "react-native";

const Home = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    return (
        <View>
            <Text>Home Page</Text>
            <Button title="Sair" onPress={() => logout(navigation)}/>
        </View>
    )
}

export default Home;