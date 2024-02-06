import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import ConnectionAPI, {
  MethodType,
  connectionAPIPost,
} from '../Functions/Connection/ConnectionAPI';
import { ReturnLogin } from '../types/returnLogin';
import { userUseReducer } from '../../store/reducers/userReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { setAuthorizationToken } from '../Functions/Connection/auth';

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setModal } = useGlobalReducer();
  const { setUser } = userUseReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  interface RequestProps<T> {
    url: string;
    method: MethodType;
    saveGlobal?: (object: T) => void;
    body?: unknown;
    message?: string;
  }

  const request = async <T>({
    url,
    method,
    saveGlobal,
    body,
    message,
  }: RequestProps<T>): Promise<T | undefined> => {
    setLoading(true);
    const requestObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setModal({
            visible: true,
            title: 'Success',
            text: message,
          });
        }
        return result;
      })
      .catch((error: Error) => {
        setModal({
          visible: true,
          title: 'Success',
          text: error.message,
        });
        return undefined;
      });

    setLoading(false);
    return requestObject;
  };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('https://ee06-89-109-49-23.ngrok-free.app/auth', body)
      .then((result) => {
        setAuthorizationToken(result.accessToken);

        setUser(result.user);
        reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Error',
          text: 'User or Password incorrect',
        });
      });
    setLoading(false);
  };

  return {
    loading,
    request,
    authRequest,
    errorMessage,
    setErrorMessage,
  };
};
