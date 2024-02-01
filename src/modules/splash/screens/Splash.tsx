import { useEffect } from "react";
import { ContainerSplash, ImagelogoSplash } from "../styles/splash.style";
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_USER } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { userUseReducer } from "../../../store/reducers/userReducer/useUserReducer";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { getAuthorizationToken } from "../../../shared/Functions/Connection/auth";

const TIME_SLEEP = 3000

const Splash = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request } = useRequest();
    const { setUser} = userUseReducer();

    useEffect(() => {
        const findUser = async () => {
            let returnUser;
            const token = await getAuthorizationToken();
            if (token) {
                returnUser = await request({
                    url: URL_USER,
                    method: MethodEnum.GET,
                    saveGlobal: setUser,
                });
            }

            return returnUser;
        }

        const verifyLogin = async () => {
            const [ returnUser ] = await Promise.all([
                findUser(),
                new Promise<void>((r) => setTimeout(r, TIME_SLEEP)),

            ]);

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