import {ToDoService} from './todo.service'

const service = new ToDoService()
service.init({env: "development"})

test("create todo should success", async () => {
    // given
    const title = "some title"
    const description = "some description"

    // when
    const todo = await service.createTodo(title, description)

    // then
    expect(todo.title).toBe(todo.title)
    expect(todo.description).toBe(todo.description)
    expect(todo.id).toBeTruthy()
})
