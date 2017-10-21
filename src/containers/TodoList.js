import {TodoList} from './../components/TodoList';
// import {connect} from 'react-redux';
import {connect} from './../helpers/Provider';
import {
    updateSuggestedTodo,
    updateSelectedTodo,
    removeTodos,
    updateTodo,
} from './../actions';

export default connect(
    ({todos, selectedTodo}) => ({
        selectedTodo,
        todos
    }),
    (dispatch) => ({
        onTodoUpdate: (currentTodoId, nextTodo) => (
            dispatch(updateTodo(currentTodoId, nextTodo))
        ),
        onTodosRemove: (todoIds) => (
            dispatch(removeTodos(todoIds))
        ),
        onSelectedTodoUpdate: (todo) => (
            dispatch(updateSelectedTodo(todo))
        ),
        onSuggestedTodoUpdate: (todo) => (
            dispatch(updateSuggestedTodo(todo))
        )
    })
)(TodoList);