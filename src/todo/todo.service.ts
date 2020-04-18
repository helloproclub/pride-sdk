import { Config } from '../../types/config'

import { ToDo } from './todo.entity'
import { ToDoRepository, ToDoMockRepository } from './todo.repository'

class ToDoService {
    private repository: ToDoRepository

    init(config: Config) {
        if (config.env === 'development') {
            this.repository = new ToDoMockRepository()
            this.repository.init(config)
        } else {
            // init db repo
        }
    }

    async createTodo(title, description): Promise<ToDo> {
        return await this.repository.createToDo({title, description})
    }
}

export {
    ToDoService
}
