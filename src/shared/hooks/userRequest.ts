import { useState } from "react"
import { RequestLogin } from "../types/requestLogin";
import { connectionAPIPost } from "../Functions/Conection/ConnectionAPI";
import { ReturnLogin } from "../types/returnLogin";
import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/reducers/userReducer";

export const userRequest = () => {
  const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const authRequest = async (body: RequestLogin) => {
        setLoading(true);
        await connectionAPIPost<ReturnLogin>('https://31e0-89-109-45-48.ngrok-free.app/auth', body)
        .then((result) => {
          dispatch(setUserAction(result.user));
        })
          .catch(() => {
            setErrorMessage('User or Password incorrect');
          });
        setLoading(false);
    };

    return {
        loading,
        authRequest,
        errorMessage,
        setErrorMessage,
    };
};