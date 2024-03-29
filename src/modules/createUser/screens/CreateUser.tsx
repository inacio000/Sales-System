import Input from "../../../shared/components/Input/input";
import Button from "../../../shared/components/Button/Button";
import { CreateUserContainer } from "../styles/createUser.style";
import { useCreateUser } from "../hook/useCreateUser";
import { useRef } from "react";
import { TextInput } from "react-native";

const CreateUser = () => {
    const {createUser, handleOnChangeInput, handleCreateUser, loading, disable } = useCreateUser();

    const phoneInput = useRef<TextInput>(null);
    const emailInput = useRef<TextInput>(null);
    const cpfInput = useRef<TextInput>(null);
    const passwordInput = useRef<TextInput>(null);
    const confirmPasswordInput = useRef<TextInput>(null);

    return (
        <CreateUserContainer>
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'name')}
                value={createUser.name} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Full name:"
                onSubmitEditing={() => phoneInput?.current?.focus()}
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'phone')}
                value={createUser.phone} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Phone number:"
                type="cell-phone"
                ref={phoneInput}
                onSubmitEditing={() => emailInput?.current?.focus()}
                keyboardType="phone-pad"
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'email')}
                value={createUser.email} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Email:"
                ref={emailInput}
                onSubmitEditing={() => cpfInput?.current?.focus()}
                keyboardType="email-address"
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'cpf')}
                value={createUser.cpf} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="CPF:"
                type="cpf"
                ref={cpfInput}
                onSubmitEditing={() => passwordInput?.current?.focus()}
                keyboardType="numeric"
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'password')}
                value={createUser.password} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Password:"
                secureTextEntry
                ref={passwordInput}
                onSubmitEditing={() => confirmPasswordInput?.current?.focus()}
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
                value={createUser.confirmPassword} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Confirm Password:"
                secureTextEntry
                ref={confirmPasswordInput}
                onSubmitEditing={handleCreateUser}
            />
            <Button 
                margin="0px 0px 32px 0px" 
                title="Create User"
                onPress={handleCreateUser}
                loading={loading}
                disabled={disable}
            />
        </CreateUserContainer>
    )
}

export default CreateUser;