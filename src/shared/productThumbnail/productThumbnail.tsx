import { useNavigation } from "@react-navigation/native";
import { convertMoneyToNumber } from "../Functions/money";
import { theme } from "../Theme/Theme";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import { textTypes } from "../components/Text/TextTypes";
import { ProductType } from "../types/productType";
import { ProductImage, ProductInsertCart, ProductThumbnailContainer } from "./productThumbnail.style";
import { ProductNavigationProp } from "../../modules/product/screens/product";
import { MenuUrl } from "../enums/MenuUrl.enum";
import { Icon } from "../components/Icon/Icon";

interface ProductThumbnailProps {
    product: ProductType;
    margin?: string;
}

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
    const { navigate } = useNavigation<ProductNavigationProp>();
    

    const handleGoToProduct = () => {
        navigate(MenuUrl.PRODUCT, {
            product,
        })
    }

    return (
        <ProductThumbnailContainer 
            margin={margin}
            onPress={handleGoToProduct}
        >
            <ProductImage source={{ uri: product.image}}/>
            <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
            <Text 
                color={theme.colors.mainTheme.primary}
                type={textTypes.PARAGRAPH_SEMI_BOLD}
            >{convertMoneyToNumber(product.price)}</Text>
            <ProductInsertCart>
                <Icon name='cart' color={theme.colors.neutralTheme.white} />
                {/* <Icon name='Cart' color={theme.colors.neutralTheme.white}/> */}
            </ProductInsertCart>
            {/* <Button title="Insert"></Button> */}
        </ProductThumbnailContainer>
    )
};

export default ProductThumbnail;