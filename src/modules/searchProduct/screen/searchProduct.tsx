import { RouteProp, useRoute } from "@react-navigation/native";
import Text from "../../../shared/components/Text/Text"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import { View } from "react-native";
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_PRODUCT_PAGE } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { PaginationMetaType, PaginationType } from "../../../shared/types/paginationType";
import { ProductType } from "../../../shared/types/productType";

export type SearchProductNavigationProp = NativeStackNavigationProp<Record<string, SearchParams>>;


export interface SearchParams {
    search?: string;
}

const SearchProduct = () => {
    const { searchProducts, setSearchProducts } =useProductReducer();
    const { params } = useRoute<RouteProp<Record<string, SearchParams>>>();
    const { request } = useRequest();
    const { search } = params;

    useEffect(() => {
        request<PaginationType<ProductType[]>>({
            url: `${URL_PRODUCT_PAGE}?search=${search}`,
            method: MethodEnum.GET,
            saveGlobal: setSearchProducts
        })
    }, [search])

    return (
        <View>
            {searchProducts && (
                <Text>Product found</Text>
            )}
            <Text>Anything</Text>
        </View>
    );
};

export default SearchProduct;