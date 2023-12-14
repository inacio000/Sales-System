import styled from 'styled-components/native';
import { theme } from '../../Theme/Theme';
import { Icon } from '../Icon/Icon';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  height: 200px;
  width: 100%;
  background-color: ${theme.colors.neutralTheme.white};

  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  padding: 16px;
  z-index: 1;
  shadow-color: ${theme.colors.neutralTheme.black};
  shadow-offset: {
    width: 0;
    height: 0;
  }
  shadow-opacity: 1;
  shadow-radius: 1px;
  elevation: 10;
`;

export const IconCloseModal = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 2;
`;
