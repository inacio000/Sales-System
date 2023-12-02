import styled from 'styled-components/native';

interface ContainerTextProps {
  color?: string;
  fontSize: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}

export const ContainerText = styled.Text<ContainerTextProps>`
  ${(props: { color: string }) => (props.color ? `color: ${props.color}` : '')};

  font-family: ${(props: { fontFamily: string }) => props.fontFamily};

  font-size: ${(props: { fontSize: string }) => props.fontSize};
`;
