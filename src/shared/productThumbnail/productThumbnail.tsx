import { useNavigation } from "@react-navigation/native";
import { convertMoneyToNumber } from "../Functions/money";
import { theme } from "../Theme/Theme";
import Text from "../components/Text/Text";
import { textTypes } from "../components/Text/TextTypes";
import { ProductType } from "../types/productType";
import { ProductImage, ProductInsertCart, ProductThumbnailContainer } from "./productThumbnail.style";
import { ProductNavigationProp } from "../../modules/product/screens/product";
import { MenuUrl } from "../enums/MenuUrl.enum";
import { Icon } from "../components/Icon/Icon";
import { useRequest } from "../hooks/userRequest";
import { URL_CART } from "../Constants/urls";
import { MethodEnum } from "../enums/methods.enum";
import { ActivityIndicator } from "react-native";
import { CartRequest } from "../types/cartRequest";

interface ProductThumbnailProps {
    product: ProductType;
    margin?: string;
}

const AMOUNT_DEFAULT = 1;

const ProductThumbnail = ({ product, margin }: ProductThumbnailProps) => {
    const { navigate } = useNavigation<ProductNavigationProp>();
    const { request, loading } = useRequest();

    const handleInsertProductInCart = () => {
        request<unknown, CartRequest>({
            url: URL_CART,
            method: MethodEnum.POST,
            body: {
                productId: product.id,
                amount: AMOUNT_DEFAULT,
            },
            message: 'Insert successfully'
        })
    }

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
            <ProductInsertCart onPress={handleInsertProductInCart}>
                {loading ? (
                    <ActivityIndicator color={theme.colors.neutralTheme.white}/>
                ) : (
                    <Icon name='cart' color={theme.colors.neutralTheme.white} />
                )}
            </ProductInsertCart>
        </ProductThumbnailContainer>
    )
};

export default ProductThumbnail;