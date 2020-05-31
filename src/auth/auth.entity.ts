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

type RegisterResult = {
    id?: string,
    token?: string,
    status: number,
    err?: string
}

export {
    Auth,
    Register,
    RegisterResult
}