import { useCallback, useState } from "react";
import { View } from "react-native";


const UseCallBack = () => {
    const [name, setName] = useState('Inacio')
    const [lastName, setLastName] = useState('Raimundo')

    const handleChangeName = useCallback(() => {
        setName(`Luis ${lastName}`);
    }, []);

    const handleChangeLastName = () => {
        setLastName('Calela')
    }

    return (
        <View>
            <button onClick={handleChangeName}>Name</button>
            <button onClick={handleChangeLastName}>Last Name</button>
        </View>
    )
}

export default UseCallBack;