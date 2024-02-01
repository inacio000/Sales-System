import Input from "../../../shared/components/Input/input";
import Button from "../../../shared/components/Button/Button";
import { CreateUserContainer } from "../styles/createUser.style";

const CreateUser = () => {
    return (
        <CreateUserContainer>
            <Input margin="0px 0px 16px 0px" placeholder="Insert" title="Full name:"/>
            <Input margin="0px 0px 16px 0px" placeholder="Insert" title="Phone number:"/>
            <Input margin="0px 0px 16px 0px" placeholder="Insert" title="Email:"/>
            <Input margin="0px 0px 16px 0px" placeholder="Insert" title="CPF:"/>
            <Input margin="0px 0px 16px 0px" placeholder="Insert" title="Password:"/>
            <Input margin="0px 0px 16px 0px" placeholder="Insert" title="Confirm Password:"/>
            <Button margin="0px 0px 32px 0px" title="Create User"/>
        </CreateUserContainer>
    )
}

export default CreateUser;