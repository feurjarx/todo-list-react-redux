let selectedTodo = (state = null, action) => {
    switch(action.type) {
        case 'SELECTED_TODO_UPDATE':
            return action.nextSelectedTodo;
        default:
            return state;
    }
};

export {
    selectedTodo
};