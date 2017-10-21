let getDefaultTodo = () => ({
    id: null,
    title: '',
    completed: false
});

let suggestedTodo = (state = getDefaultTodo(), action) => {
    switch(action.type) {
        case 'SUGGESTED_TODO_UPDATE':
            return {...state, ...action.nextSuggestedTodo};
        default:
            return state;
    }
};

export {
    suggestedTodo
};