import Text from "../../../shared/components/Text/Text";
import { FlatList, NativeSyntheticEvent, TextInputChangeEventData, View } from "react-native";
import { useProductReducer } from "../../../store/reducers/productReducer/useProductReducer";
import { useEffect, useState } from "react";
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_PRODUCT } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { ProductType } from "../../../shared/types/productType";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { MenuUrl } from "../../../shared/enums/MenuUrl.enum";
import { ProductNavigationProp } from "../../product/screens/product";
import ProductThumbnail from "../../../shared/productThumbnail/productThumbnail";
import Input from "../../../shared/components/Input/input";
import { Icon } from "../../../shared/components/Icon/Icon";
import { HomeContainer } from "../styles/home.style";

const Home = () => {
    const [ search, setSearch ] = useState('');
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
    const { request } = useRequest();
    const { products, setProducts } = useProductReducer();

    useEffect(() => {
        request<ProductType[]>({
            url: URL_PRODUCT,
            method: MethodEnum.GET,
            saveGlobal: setProducts,
        })
    }, [])

    const handleGoToProduct = () => {
        navigate(MenuUrl.SEARCH_PRODUCT)
    }

    const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setSearch(event.nativeEvent.text)
    }
    

    return (
        <View>
            <HomeContainer>
                <Input 
                    iconRight
                    value={search}
                    onPressIconRight={handleGoToProduct}
                    onChange={handleOnChangeSearch}
                />
            </HomeContainer>
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
        </View>
    )
}

export default Home;