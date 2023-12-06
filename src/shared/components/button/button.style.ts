import styled from 'styled-components/native';
import { theme } from '../../Theme/Theme';
import LinearGradient from 'react-native-linear-gradient';
interface ButtonProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  ${(props: { margin: string }) => (props.margin ? `margin: ${props.margin};` : '')}

  background-color: green;
`;

export const SecondaryButton = styled(ContainerButton)<ButtonProps>`
  ${(props: { margin: string }) => (props.margin ? `margin: ${props.margin};` : '')}

  background-color: transparent;
  border: 1px;
  border-color: ${theme.colors.mainTheme.primary};
`;

export const GradientButton = styled(LinearGradient)<ButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  ${(props: { margin: string }) => (props.margin ? `margin: ${props.margin};` : '')}
`;
