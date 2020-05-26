import { Config } from '../../types/config'

import {CreateToDoRequest, ToDo, GetByID, LimitAndOffset} from './todo.entity'

interface ToDoRepository {
    init: (config: Config) => void,
    createToDo:  (request: CreateToDoRequest) => Promise<ToDo>,
    getListToDo: () => Promise<ToDo[]>,
    getByID: (request: GetByID) => Promise<ToDo>,
    getListTodoRequest: (request: LimitAndOffset) => Promise<ToDo[]>,
    updateByID: (request: ToDo) => Promise<ToDo>
}

class ToDoMockRepository implements ToDoRepository {
    private db:  ToDo[] = []

    init(config: Config): void {
        for(let i: number = 0; i < 10; i++) {
            this.db.push({
                id: `${i}`,
                title: 'some mock data',
                description: 'some mock data',
            })
        }
    }

    async createToDo(request: CreateToDoRequest): Promise<ToDo> {
        this.db.push({
            id: `${this.db.length}`,
            title: request.title,
            description: request.description,
        })

        const result = new Promise<ToDo>(resolve =>
            resolve({
                id: `${this.db.length-1}`,
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

    async getByID(request: GetByID): Promise<ToDo> {
        const result = new Promise<ToDo>(resolve =>
            resolve(this.db.find(myObj => myObj.id == request.id))
        );

        return result
    }

    async getListTodoRequest(request: LimitAndOffset): Promise<ToDo[]> {
        const result = new Promise<ToDo[]>(resolve =>
            resolve(this.db.filter(data => Number(data.id) >= request.offset && Number(data.id) < request.limit + request.offset ))
        );
        
        return result
    }
    
    async updateByID(request: ToDo): Promise<ToDo> {
        const index = this.db.findIndex((data => data.id == request.id))
        this.db[index].title = request.title
        this.db[index].description = request.description
        
        const result = new Promise<ToDo>(resolve =>
            resolve({
                id: request.id,
                title: request.title,
                description: request.description
            })
        );
        
        return result
    }   
}

export {
    ToDoRepository,
    ToDoMockRepository,
}
