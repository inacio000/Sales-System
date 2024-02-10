import Text from "../../../shared/components/Text/Text";
import { FlatList, View } from "react-native";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { useEffect } from "react";
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_PRODUCT } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { ProductType } from "../../../shared/types/productType";
import { useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { ProductNavigationProp } from "../../product/screens/product";
import ProductThumbnail from "../../../shared/productThumbnail/productThumbnail";

const Home = () => {
    const { navigate } = useNavigation<ProductNavigationProp>();
    const { request } = useRequest();
    const { products, setProducts } = useProductReducer();

    useEffect(() => {
        request<ProductType[]>({
            url: URL_PRODUCT,
            method: MethodEnum.GET,
            saveGlobal: setProducts,
        })
    }, [])

    const handleGoToProduct = (product: ProductType) => {
        navigate(MenuUrl.PRODUCT, {
            product,
        })
    }

    return (
        <View>
            <Text>Home Page</Text>
            <FlatList 
                data={products}
                horizontal
                renderItem={({item}) => 
                    <ProductThumbnail 
                        product={item}
                        margin="0px 8px"
                    />
                }
            />
            {/* {products.map((product, key) => (
                <TouchableOpacity 
                    onPress={() => 
                    handleGoToProduct(product)} 
                    key={key}>
                        <Text>{product.name}</Text>
                </TouchableOpacity>
            ))} */}
        </View>
    )
}

export default Home;