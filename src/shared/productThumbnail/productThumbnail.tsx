import { theme } from "../Theme/Theme";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import { textTypes } from "../components/Text/TextTypes";
import { ProductType } from "../types/productType";
import { ProductImage, ProductThumbnailContainer } from "./productThumbnail.style";

interface ProductThumbnailProps {
    product: ProductType;
    margin?: string;
}

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
    return (
        <ProductThumbnailContainer margin={margin}>
            <ProductImage source={{ uri: product.image}}/>
            <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
            <Text 
                color={theme.colors.mainTheme.primary}
                type={textTypes.BUTTON_SEMI_BOLD}
            >{product.price}</Text>
            <Button title="Insert"></Button>
        </ProductThumbnailContainer>
    )
};

export default ProductThumbnail;