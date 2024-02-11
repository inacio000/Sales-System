import { RouteProp, useRoute } from "@react-navigation/native";
import Text from "../../../shared/components/Text/Text"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { NativeSyntheticEvent, ScrollView, TextInputChangeEventData, View } from "react-native";
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_PRODUCT_PAGE } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { PaginationType } from "../../../shared/types/paginationType";
import { ProductType } from "../../../shared/types/productType";
import Input from "../../../shared/components/Input/input";
import ProductThumbnail from "../../../shared/productThumbnail/productThumbnail";

export type SearchProductNavigationProp = NativeStackNavigationProp<Record<string, SearchParams>>;


export interface SearchParams {
    search?: string;
}

const SearchProduct = () => {
    const { searchProducts, setSearchProducts } =useProductReducer();
    const { params } = useRoute<RouteProp<Record<string, SearchParams>>>();
    const [ value, setValue ] = useState(params?.search || '');
    const { request } = useRequest();

    useEffect(() => {
        setValue(params?.search || '')
    }, [params])

    useEffect(() => {
        if (value) {
            request<PaginationType<ProductType[]>>({
                url: `${URL_PRODUCT_PAGE}?search=${value}`,
                method: MethodEnum.GET,
                saveGlobal: setSearchProducts
            })
        }
    }, [value])

    console.log(searchProducts)

    const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(event.nativeEvent.text)
    }

    return (
        <View>
            <Input 
                value={value} 
                iconRight
                onChange={handleOnChangeInput}
            />
            {searchProducts && searchProducts.data && (
                <ScrollView>
                    {searchProducts.data.map((product, key) => 
                        <ProductThumbnail 
                            product={product}
                            key={key}
                        />
                    )}
                </ScrollView>
            )}
            <Text>Anything</Text>
        </View>
    );
};

export default SearchProduct;