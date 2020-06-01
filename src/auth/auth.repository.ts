import { Config } from '../../types/config'

import { User, RegisterRequest,AuthResponse, LoginRequest } from "./auth.entity"


interface AuthRepository {
    init: (Config: Config)=> void,
    registerUser: (request: RegisterRequest) => Promise<AuthResponse>
    loginUser: (request: LoginRequest) => Promise<AuthResponse>
}

class AuthMockRepository implements AuthRepository{
    private db: User[] = []

    init(config: Config): void {
        for(let i: number = 0; i < 3; i++) {
            this.db.push({
                id: `${i}`,
                username: `user${i}`,
                email: `danu${i}@test.co.id`,
                password: Math.random().toString(36).substring(7),
                role:1,
                token: (Math.random()*1e32).toString(36)
            })
        }
    }

    async registerUser(request: RegisterRequest): Promise<AuthResponse> {
        const genToken = (Math.random()*1e32).toString(36)

        this.db.push({
            id: `${this.db.length}`,
            username: request.username,
            email: request.email,
            password: request.password,
            role:request.role,
            token: genToken
        });

        const result = new Promise<AuthResponse>((resolve) =>{
                resolve({
                    id:`${this.db.length-1}`,
                    token:genToken,
                    status: 200
                })
            }
        );

        return result    

    }

    async loginUser(request: LoginRequest): Promise<AuthResponse> {
        const data = this.db.find(data => data.username == request.username && data.password == request.password )

        if(data){
            return new Promise<AuthResponse>((resolve) =>{
                resolve({
                    id:data.id,
                    token:data.token,
                    role:data.role,
                    status: 200
                })
            });
        }else{
            return new Promise<AuthResponse>((resolve) =>{
                resolve({
                    err:"Username or password is wrong!",
                    status: 400
                })
            });
        }    

    }
}

export {
    AuthRepository,
    AuthMockRepository
}