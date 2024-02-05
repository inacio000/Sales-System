import { useEffect, useState } from "react"
import { CreateUserType } from "../../../shared/types/createUserType";
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_USER } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { insertMaskInCpf } from "../../../shared/Functions/cpfMask";
import { insertMaskInPhone } from "../../../shared/Functions/phoneMask";

export const useCreateUser = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();
    const { request, loading } = useRequest();
    const [ disable, setDisable ] = useState<boolean>(true);
    const [ createUser, setCreateUser ] = useState<CreateUserType>({
        confirmPassword: '',
        cpf: '',
        email: '',
        name: '',
        password: '',
        phone: '',
    });

    useEffect(() => {
        if (
            createUser.name != '' &&
            createUser.phone != '' &&
            createUser.email != '' &&
            createUser.cpf != '' &&
            createUser.password != '' &&
            createUser.password === createUser.confirmPassword
        ) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [createUser])

    const handleCreateUser = async () => {
        const resultCreateUser = await request({
            url: URL_USER,
            method: MethodEnum.POST,
            body: createUser,
            message: 'User Created Successfully',
        });

        if (resultCreateUser) {
            reset({
                index: 0,
                routes: [{ name: MenuUrl.LOGIN}],
            });
        };
    };

    const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>, name: string) => {
        setCreateUser((currentCreateUser) => ({
            ...currentCreateUser,
            [name]: event.nativeEvent.text,
        }));
    };

    return {
        disable,
        loading,
        createUser,
        handleCreateUser,
        handleOnChangeInput
    }
}