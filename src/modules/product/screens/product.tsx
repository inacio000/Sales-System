import { RouteProp, useRoute } from "@react-navigation/native";
import Text from "../../../shared/components/Text/Text"
import { ProductType } from "../../../shared/types/productType";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ProductNavigationProp = NativeStackNavigationProp<Record<string, ProductsParams>>;

export interface ProductsParams {
    product: ProductType;
}

const Product = () => {
    const { params } = useRoute<RouteProp<Record<string, ProductsParams>>>();
    const { product } = params;

    console.log('', params)
    return <Text>{product.name}</Text>
}

export default Product;