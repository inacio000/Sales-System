import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native"

interface ExampleProps {
    text?: string;
    children?: string;
}

const Example = ({ children, text}: ExampleProps) => {
    const [newText, setNewText] = useState();

    useEffect(() => {
        console.log("Past...")
    }, [newText])

    const handleOnPress = () => {
        setNewText('new text');
    };

    return (
        <View>
            <Text>{newText || text}</Text>
            <Text>{children}</Text>
            <Button onPress={handleOnPress} title='Button'/>
        </View>
    );
};

export default Example;