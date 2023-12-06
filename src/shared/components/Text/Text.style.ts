import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  margin?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: { color: string; }) => (props.color ? `color: ${props.color};` : '')};
  ${(props: { margin: string; }) => (props.margin ? `margin: ${props.margin};` : '')};

  padding-top: 3px;
  font-family: ${(props: { fontFamily: string; }) => props.fontFamily};
  font-size: ${(props: { fontSize: string; }) => props.fontSize};
`;
