import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, TextInputChangeEventData, View } from "react-native";
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_PRODUCT_PAGE } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { PaginationType } from "../../../shared/types/paginationType";
import { ProductType } from "../../../shared/types/productType";
import Input from "../../../shared/components/Input/input";
import ProductThumbnail from "../../../shared/productThumbnail/productThumbnail";
import { ActiveIndicatorButton } from "../../../shared/components/Button/Button.style";
import { theme } from "../../../shared/Theme/Theme";
import { SearchProductContainer, SearchProductScrollView } from "../styles/searchProduct.style";

export type SearchProductNavigationProp = NativeStackNavigationProp<Record<string, SearchParams>>;


export interface SearchParams {
    search?: string;
}

const SearchProduct = () => {
    const { searchProducts, setSearchProducts, insertSearchProduct } = useProductReducer();
    const { params } = useRoute<RouteProp<Record<string, SearchParams>>>();
    const { request, loading } = useRequest();
    const [value, setValue] = useState(params?.search || '');

    useEffect(() => {
        setValue(params?.search || '')
    }, [params])

    useEffect(() => {
        setSearchProducts(undefined);
        request<PaginationType<ProductType[]>>({
            url: `${URL_PRODUCT_PAGE}?search=${value}`,
            method: MethodEnum.GET,
            saveGlobal: setSearchProducts,
        })
    }, [value])

    const findNewProductPage = () => {
        if (searchProducts &&
            searchProducts.meta.currentPage <
            searchProducts.meta.totalPages
        ) {

            request<PaginationType<ProductType[]>>({
                url: `${URL_PRODUCT_PAGE}?search=${value}&page=${searchProducts.meta.currentPage + 1}`,
                method: MethodEnum.GET,
                saveGlobal: insertSearchProduct
            })
        }
    }

    const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(event.nativeEvent.text);
    };

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
        const isEndScroll = contentOffset.y >= (contentSize.height - layoutMeasurement.height);

        if (isEndScroll && !loading) {
            findNewProductPage();
            console.log('Final screen')
        }
    }

    return (
        <SearchProductContainer>
            <Input
                value={value}
                iconRight
                onChange={handleOnChangeInput}
            />
            {searchProducts && searchProducts.data && (
                <ScrollView onScroll={handleScroll}>
                    <SearchProductScrollView>
                        {searchProducts.data.map((product, key) =>
                            <ProductThumbnail
                                margin="4px 0px"
                                product={product}
                                key={key}
                            />
                        )}
                    </SearchProductScrollView>
                </ScrollView>
            )}
            {loading && (
                <ActiveIndicatorButton color={theme.colors.mainTheme.primary} />
            )}
        </SearchProductContainer>
    );
};

export default SearchProduct;