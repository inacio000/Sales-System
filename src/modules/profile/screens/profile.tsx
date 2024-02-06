import { View } from "react-native";
import Button from "../../../shared/components/Button/Button";
import Text from "../../../shared/components/Text/Text"
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { logout } from "../../../shared/Functions/Connection/auth";

const Profile = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    return (
        <View>
            <Text>Profile</Text>
            <Button title="Log out" onPress={() => logout(navigation)}/>
        </View>
    )
}

export default Profile;