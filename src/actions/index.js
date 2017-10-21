export let addTodo = (newTodo) => ({
    type: 'TODO_ADD',
    newTodo
});

export let updateTodo = (currentTodoId, nextTodo) => ({
    type: 'TODO_UPDATE',
    currentTodoId,
    nextTodo
});

export let removeTodos = (todoIds) => ({
    type: 'TODOS_REMOVE',
    todoIds
});

export let updateSelectedTodo = (nextSelectedTodo) => ({
    type: 'SELECTED_TODO_UPDATE',
    nextSelectedTodo
});

export let updateSuggestedTodo = (nextSuggestedTodo) => ({
    type: 'SUGGESTED_TODO_UPDATE',
    nextSuggestedTodo
});