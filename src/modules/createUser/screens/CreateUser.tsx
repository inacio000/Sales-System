import Input from "../../../shared/components/Input/input";
import Button from "../../../shared/components/Button/Button";
import { CreateUserContainer } from "../styles/createUser.style";
import { useCreateUser } from "../hook/useCreateUser";

const CreateUser = () => {
    const {createUser, handleOnChangeInput, handleCreateUser, loading, disable } = useCreateUser();

    return (
        <CreateUserContainer>
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'name')}
                value={createUser.name} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Full name:"
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'phone')}
                value={createUser.phone} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Phone number:"
                type="cell-phone"
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'email')}
                value={createUser.email} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Email:"
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'cpf')}
                value={createUser.cpf} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="CPF:"
                type="cpf"
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'password')}
                value={createUser.password} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Password:"
            />
            <Input 
                onChange={(event) => handleOnChangeInput(event, 'confirmPassword')}
                value={createUser.confirmPassword} 
                margin="0px 0px 16px 0px" 
                placeholder="Insert" 
                title="Confirm Password:"
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