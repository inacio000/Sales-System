import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { connectionAPIPost } from '../../../shared/Functions/Conection/ConnectionAPI';

export const useLogin = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleOnPress = async () => {
    setLoading(true);

    await connectionAPIPost('https://31e0-89-109-45-48.ngrok-free.app/auth', {
        email,
        password,
      })
      .catch(() => {
        setErrorMessage('User or Password incorrect');
      });
    setLoading(false);
    console.log('Clicked...');
  };

  const handleOnChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };

  const handleOnChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
};
