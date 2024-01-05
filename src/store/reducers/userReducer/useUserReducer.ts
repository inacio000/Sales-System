import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hooks"
import { UserType } from "../../../shared/types/userType";
import { setUserAction } from ".";

export const userUseReducer = () => {
    const dispatch = useDispatch();
    const { user } = useAppSelector((state) => state.userReducer);

    const setUser = (currentUser: UserType) => {
        dispatch(setUserAction(currentUser));
    };

    return {
        user,
        setUser,
    };
};