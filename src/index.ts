import { ToDoService } from './todo/index'
import { Config } from '../types/config'

class PrideServices {
    public todo: ToDoService

    init(config: Config) {
        this.todo.init(config)
    }
}
