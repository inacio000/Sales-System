import styled from "styled-components/native"
import { theme } from "../../../shared/Theme/Theme"

export const ContainerLogin = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.neutralTheme.white};
    justify-content: center;
    align-items: center;
    color: gray;

    padding: 16px;
`

export const Imagelogo = styled.Image`
    width: 200px;
    height: 200px;

    margin-bottom: 24px;
`