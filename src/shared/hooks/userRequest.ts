import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import { connectionAPIPost } from '../Functions/Conection/ConnectionAPI';
import { ReturnLogin } from '../types/returnLogin';
import { userUseReducer } from '../../store/reducers/userReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';

export const userRequest = () => {
  const { setModal } = useGlobalReducer();
  const { setUser } = userUseReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPIPost<ReturnLogin>('https://f170-89-109-45-138.ngrok-free.app/auth', body)
      .then((result) => {
        setUser(result.user);
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
