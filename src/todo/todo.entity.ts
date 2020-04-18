type CreateToDoRequest  = {
    title: string,
    description: string
}

type ToDo = {
    id: string,
    title: string,
    description: string,
}

export {
    ToDo,
    CreateToDoRequest
}