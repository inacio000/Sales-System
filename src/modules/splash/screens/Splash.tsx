import { useEffect } from "react";
import { ContainerSplash, ImagelogoSplash } from "../styles/splash.style";
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_USER } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { userUseReducer } from "../../../store/reducers/userReducer/useUserReducer";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";

const Splash = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request } = useRequest();
    const { setUser} = userUseReducer();

    useEffect(() => {
        const verifyLogin = async () => {
            const returnUser = await request({
                url: URL_USER,
                method: MethodEnum.GET,
                saveGlobal: setUser,
            });

            if (returnUser) {
                reset ({
                    index: 0,
                    routes: [{ name: MenuUrl.HOME}],
                });
            } else {
                reset ({
                    index: 0,
                    routes: [{ name: MenuUrl.LOGIN}],
                })
            }
        };

        verifyLogin();
    }, [])
    return (
        <ContainerSplash>
            <ImagelogoSplash source={require('../../../assets/images/logo.png')} />
        </ContainerSplash>
    )
}

export default Splash;