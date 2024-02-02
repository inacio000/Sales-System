export interface CreateUserType {
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
    confirmPassword?: string;
}