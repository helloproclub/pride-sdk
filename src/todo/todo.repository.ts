import { Config } from '../../types/config'

import {CreateToDoRequest, ToDo} from './todo.entity'

interface ToDoRepository {
    init: (config: Config) => void,
    createToDo:  (request: CreateToDoRequest) => Promise<ToDo>,
    getListToDo: () => Promise<ToDo[]>,
}

class ToDoMockRepository implements ToDoRepository {
    private db:  ToDo[] = []

    init(config: Config): void {
        // set 10 mock data
        for(let i: number = 0; i < 10; i++) {
            this.db.push({
                id: `${i}`,
                title: 'some mock data',
                description: 'some mock data',
            })
        }
    }

     async createToDo(request: CreateToDoRequest): Promise<ToDo> {
        const result = new Promise<ToDo>(resolve =>
            resolve({
                id: `${this.db.length}`,
                title: request.title,
                description: request.description
            })
        );

        return result
    }

    async getListToDo(): Promise<ToDo[]> {
        const result = new Promise<ToDo[]>(resolve =>
            resolve(this.db)
        );

        return result
    }
}

export {
    ToDoRepository,
    ToDoMockRepository,
}
