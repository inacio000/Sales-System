import { useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/userRequest';
import { userUseReducer } from '../../../store/reducers/userReducer/useUserReducer';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';

export const useLogin = () => {
  const { user } = userUseReducer();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disabled, setDisable] = useState<boolean>(true);
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { authRequest, errorMessage, loading, setErrorMessage } = useRequest();

  // console.log('User:', user)

  useEffect(() => {
    if (
      email != '' &&
      password != ''
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  })

  const handleOnPress = async () => {
    authRequest({
      email,
      password,
    });
  };

  const handleGoToCreateUser = () => {
    navigate(MenuUrl.CREATE_USER);
  }

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
    loading,
    disabled,
    password,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleGoToCreateUser,
    handleOnChangePassword,
  };
};
