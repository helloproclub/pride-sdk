type User = {
    id:string,
    username: string,
    email: string,
    password:string,
    role:number,
    token:string
}

type RegisterRequest = {
    username: string,
    email: string,
    password:string,
    role?:number,
}

type AuthResponse = {
    id?: string,
    token?: string,
    status: number,
    role?:number
    err?: string
}

type LoginRequest = {
    username: string,
    password: string
}

export {
    User,
    RegisterRequest,
    AuthResponse,
    LoginRequest
}