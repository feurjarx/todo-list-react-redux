// import {connect} from 'react-redux';
import {connect} from './../helpers/Provider';
import {generateTodoId} from './../helpers';
import {TodoPanel} from './../components/TodoPanel';
import {
    updateSuggestedTodo,
    updateTodo,
    addTodo,
} from './../actions';

export default connect(
    ({suggestedTodo, selectedTodo}) => ({
        suggestedTodo,
        selectedTodo
    }),
    (dispatch) => ({
        onTodoAdd: (todo) => (
            dispatch(addTodo({
                ...todo,
                id: generateTodoId()
            }))
        ),
        onTodoUpdate: (currentTodoId, nextTodo) => (
            dispatch(updateTodo(currentTodoId, nextTodo))
        ),
        onSuggestedTodoUpdate: (todo) => (
            dispatch(updateSuggestedTodo(todo))
        )
    })
)(TodoPanel);