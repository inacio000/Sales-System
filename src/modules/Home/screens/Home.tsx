import Text from "../../../shared/components/Text/Text";
import { View } from "react-native";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { useEffect } from "react";
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_PRODUCT } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { ProductType } from "../../../shared/types/productType";

const Home = () => {
    const { request } = useRequest();
    const { products, setProducts } = useProductReducer();

    useEffect(() => {
        request<ProductType[]>({
            url: URL_PRODUCT,
            method: MethodEnum.GET,
            saveGlobal: setProducts,
        })
    }, [])

    return (
        <View>
            <Text>Home Page</Text>
            {products.map((product, key) => (
                <Text key={key}>{product.name}</Text>
            ))}
        </View>
    )
}

export default Home;