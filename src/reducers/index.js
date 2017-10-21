import {combineReducers} from 'redux';
import {suggestedTodo} from './suggestedTodo';
import {selectedTodo} from './selectedTodo';
import {todos} from './todos';

let rootReducer = combineReducers({
    suggestedTodo,
    selectedTodo,
    todos
});

export {
    rootReducer
};