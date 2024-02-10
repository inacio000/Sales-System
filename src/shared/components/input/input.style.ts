import styled from "styled-components/native"
import { theme } from "../../Theme/Theme"
import { Icon } from "../Icon/Icon";

interface ContainerInputProps {
    isError?: boolean;
    hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    background-color: ${theme.colors.neutralTheme.white};
    border-radius: 8px;
    color: ${theme.colors.neutralTheme.black};

    padding-right: ${(props: { hasSecureTextEntry: boolean}) => props.hasSecureTextEntry ? '60px' : '16px'};

    border-width: 1px;
    border-color: ${(props: { isError: boolean; }) => props.isError ? theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
`

export const IconEye = styled(Icon)`
    position: absolute;
    right: 16px;
    top: 10px;
`;

export const IconSearch = styled(Icon)`
    position: absolute;
    right: 16px;
    top: 16px;
`