import styled from "styled-components/native";
import { theme } from "../Theme/Theme";

interface ContainerProps {
    margin?: string;
}

export const ProductThumbnailContainer = styled.TouchableOpacity<ContainerProps>`
    width: 160px;
    height: 175px;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.grayTheme.gray80};

    margin: ${(props: { margin: string; }) => props.margin || '0px'}
`;

export const ProductImage = styled.Image`
    width: 100%;
    height: 50px;
    margin-bottom: 8px;
    border-radius: 4px;

`;

export const ProductInsertCart = styled.TouchableOpacity`
    width: 158px;
    height: 20px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.mainTheme.primary};

    position: absolute;
    bottom: 0;
`