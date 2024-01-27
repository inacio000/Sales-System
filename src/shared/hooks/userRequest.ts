import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import { connectionAPIPost } from '../Functions/Connection/ConnectionAPI';
import { ReturnLogin } from '../types/returnLogin';
import { userUseReducer } from '../../store/reducers/userReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export const userRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setModal } = useGlobalReducer();
  const { setUser } = userUseReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('https://caa8-95-37-1-48.ngrok-free.app/auth', body)
      .then((result) => {
        setUser(result.user);
        reset({
          index: 0,
          routes: [{ name: 'Home'}],
        });
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Error', 
          text: 'User or Password incorrect'
        });
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
