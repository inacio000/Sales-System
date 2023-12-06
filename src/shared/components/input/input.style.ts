import styled from "styled-components/native"
import { theme } from "../../Theme/Theme"

export const ContainerInput = styled.TextInput`
    width: 100%;
    height: 48px;
    padding: 16px;
    background-color: ${theme.colors.neutralTheme.white};
    border-radius: 8px;
    color: ${theme.colors.neutralTheme.black};

    border-width: 1px;
    border-color: ${theme.colors.grayTheme.gray100};
`