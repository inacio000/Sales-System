import { useEffect } from "react";
import Text from "../../../shared/components/Text/Text"
import { useCartReducer } from "../../../store/reducers/cartReducer/useCartReducer";
import { useRequest } from "../../../shared/hooks/userRequest";
import { URL_CART } from "../../../shared/Constants/urls";
import { MethodEnum } from "../../../shared/enums/methods.enum";
import { CartType } from "../../../shared/types/CartType";

const Cart = () => {
    const { request } = useRequest();
    const { cart, setCart } = useCartReducer();

    useEffect(() => {
        request<CartType>({
            url: URL_CART,
            method: MethodEnum.GET,
            saveGlobal: setCart,
        })
    }, [])

    console.log('cart ', cart)

    return <Text>Cart Page</Text>
}

export default Cart;