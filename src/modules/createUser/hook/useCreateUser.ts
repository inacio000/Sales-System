import { useEffect, useState } from "react"
import { CreateUserType } from "../../../shared/types/createUserType";
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_USER } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { insertMaskInCpf, validateCpf } from "../../../shared/Functions/cpfMask";
import { insertMaskInPhone, validatePhone } from "../../../shared/Functions/phoneMask";
import { validateEmail } from "../../../shared/Functions/email";
import { removeSpecialCharacters } from "../../../shared/Functions/characters";

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
            createUser.name !== '' &&
            validatePhone(createUser.phone) &&
            validateEmail(createUser.email) &&
            validateCpf(createUser.cpf) &&
            createUser.password !== '' &&
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
            body: {
                ...createUser,
                phone: removeSpecialCharacters(createUser.phone),
                cpf: removeSpecialCharacters(createUser.cpf),
            },
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