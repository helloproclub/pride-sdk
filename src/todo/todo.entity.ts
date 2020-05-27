type CreateToDoRequest  = {
    title: string,
    description: string
}

type ToDo = {
    id: string,
    title: string,
    description: string,
}

type GetByID = {
    id: string
}

type LimitAndOffset = {
    offset?: number,
    limit?: number
}

export {
    ToDo,
    CreateToDoRequest,
    GetByID,
    LimitAndOffset
}