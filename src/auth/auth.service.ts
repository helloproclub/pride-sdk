import { Config } from '../../types/config'

import { Auth, RegisterSuccess } from './auth.entity'
import { AuthRepository,AuthMockRepository } from './auth.repository'

class AuthService {
    private repository: AuthRepository

    init(config: Config) {
        if (config.env === 'development') {
            this.repository = new AuthMockRepository()
            this.repository.init(config)
        } else {
            // init db repo
        }
    }

    async registerUser(username,email,password,role): Promise<RegisterSuccess> {
        const validateEmail = (email) => {
            var re = /\S+@\S+\.\S+/
            return re.test(email);
        }
        return await this.repository.registerUser({username,email,password,role})
    }
}

export {
    AuthService
}
