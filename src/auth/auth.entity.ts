type Auth = {
    id:string,
    username: string,
    email: string,
    password:string,
    role:number,
    token:string
}

type Register = {
    username: string,
    email: string,
    password:string,
    role?:number,
}

type RegisterSuccess = {
    id: string,
    token: string
}

export {
    Auth,
    Register,
    RegisterSuccess
}