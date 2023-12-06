import styled from 'styled-components/native';
import { theme } from '../../Theme/Theme';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonContainerProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  ${(props: { margin: string }) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const GradientButton = styled(LinearGradient)<ButtonContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ${(props: { margin: string }) => (props.margin ? `margin: ${props.margin};` : '')}
`;

export const SecondaryButton = styled(ContainerButton)<ButtonContainerProps>`
  ${(props: { margin: string }) => (props.margin ? `margin: ${props.margin};` : '')}

  background-color: transparent;
  border: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;

export const ActiveIndicatorButton = styled.ActivityIndicator`
    margin-left: 8px;
`

export const DisabledButton = styled(ContainerButton)<ButtonContainerProps>`
    background-color: ${theme.colors.grayTheme.gray100};
    opacity: .5;
`