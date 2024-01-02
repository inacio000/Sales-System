import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "../Functions/Conection/ConnectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { UserType } from "../types/userType";

export const userRequest = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [user, setUser] = useState<UserType>();

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
        await connectionAPIPost<ReturnLogin>('https://31e0-89-109-45-48.ngrok-free.app/auth', body)
        .then((result) => {
            setUser(result.user);
        })
          .catch(() => {
            setErrorMessage('User or Password incorrect');
          });
        setLoading(false);
    }

    return {
        user,
        loading,
        authRequest,
        errorMessage,
        setErrorMessage,
    }
}