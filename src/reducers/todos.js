import {generateTodoId} from './../helpers';

let getDefaultTodos = () => ([{
    id: generateTodoId(),
    title: 'Todo #1',
    completed: false
}, {
    id: generateTodoId(),
    title: 'Todo #2',
    completed: false
}, {
    id: generateTodoId(),
    title: 'Todo #3',
    completed: false
}]);

let todos = (state = getDefaultTodos(), action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return [
                ...state,
                action.newTodo
            ];

        case 'TODO_UPDATE':
            return state.map((todo) => (
                todo.id === action.currentTodoId
                    ? {...todo, ...action.nextTodo}
                    : todo
            ));

        case 'TODOS_REMOVE':
            return state.filter((todo) => (
                !action.todoIds.includes(todo.id)
            ));

        default:
            return state
    }
};

export {
    todos
};