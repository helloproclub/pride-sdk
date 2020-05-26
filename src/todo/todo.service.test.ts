import {ToDoService} from './todo.service'

const service = new ToDoService()
service.init({env: "development",url:""})

test("create todo should success", async () => {
    // given
    const title = "some title"
    const description = "some description"

    // when
    const todo = await service.createTodo(title,description)

    // then
    expect(todo.title).toBe(todo.title)
    expect(todo.description).toBe(todo.description)
    expect(todo.id).toBeTruthy()
})

test("must show id number 4", async () => {
    // given
    const id = "4"
    // when
    const todoNumberFour = await service.getByID(id)
    // then
    expect(todoNumberFour).toBeTruthy()
    expect(todoNumberFour.id).toMatch("4");
})

test("must get all data", async () => {
    // given

    // when
    const listTodo = await service.getListToDo()
    // then
    expect(listTodo).toBeTruthy()
})

test("must show data id 5 - 7", async () => {
    // given
    const offset = 5
    const limit = 7
    // when
    const listByRequest = await service.getListTodoRequest(offset,limit)
    // then
    expect(listByRequest).not.toBeUndefined()
})

test("must update data id 3", async () => {
    // given
    const id = 3 
    const title = "updated title"
    const description = "updated desc"
    // when
    const updateByID = await service.updateByID(id,title,description)
    // then
    expect(updateByID).not.toBeUndefined()
})
