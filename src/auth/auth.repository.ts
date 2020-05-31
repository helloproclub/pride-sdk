import { Config } from '../../types/config'

import { Auth, Register,RegisterSuccess } from "./auth.entity"


interface AuthRepository {
    init: (Config: Config)=> void,
    registerUser: (request: Register) => Promise<RegisterSuccess>
}

class AuthMockRepository implements AuthRepository{
    private db: Auth[] = []

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

    async registerUser(request: Register): Promise<RegisterSuccess> {
        const genToken = (Math.random()*1e32).toString(36)


        this.db.push({
            id: `${this.db.length}`,
            username: request.username,
            email: request.email,
            password: request.password,
            role:request.role,
            token: genToken
        });

        const result = new Promise<RegisterSuccess>((resolve) =>{
                resolve({
                    id:`${this.db.length-1}`,
                    token:genToken
                })
            }
        );

        return result    

    }
}

export {
    AuthRepository,
    AuthMockRepository
}