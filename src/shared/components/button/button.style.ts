import styled from "styled-components/native";
interface ButtonProps {
    margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ButtonProps>`
    width: 100%;
    height: 48px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    ${(props: { margin: string; }) => (props.margin ? `margin: ${props.margin};`: '')}

    background-color: greenyellow;
`