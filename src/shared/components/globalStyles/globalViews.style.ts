import styled from 'styled-components/native';

interface DisplayProps {
  margin?: string;
}

export const DisplayFlexColumn = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: ${(props: { margin: string }) => (props.margin ? props.margin : '0px')};
`;
