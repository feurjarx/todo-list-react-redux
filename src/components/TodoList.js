import React from 'react';
import {Todo} from './Todo';

class TodoList extends React.Component {
    handleTodoDelete(todoId) {
        let {onTodosRemove} = this.props;
        return () => (
            onTodosRemove([todoId])
        );
    }

    handleTodoComplete(todoId) {
        let {onTodoUpdate} = this.props;
        return () => (
            onTodoUpdate(todoId, {completed: true})
        );
    }

    handleTodoSelect(nextSelectedTodo) {
        let {
            selectedTodo,
            onSelectedTodoUpdate,
            onSuggestedTodoUpdate,
        } = this.props;

        let todoWillBeSelected = (
            !selectedTodo
            || selectedTodo.id !== nextSelectedTodo.id
        );

        return () => {
            onSelectedTodoUpdate(
                todoWillBeSelected
                    ? nextSelectedTodo
                    : null
            );

            if (todoWillBeSelected) {
                onSuggestedTodoUpdate(nextSelectedTodo)
            }
        };
    }

    render() {
        let {todos, selectedTodo} = this.props;
        if (!todos.length) {
            return (
                <i>Todos not found</i>
            )
        }

        let itemClasses = ['hovered', 'gutters'];

        return (
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={this.handleTodoSelect(todo)}
                        className={
                            selectedTodo && selectedTodo.id === todo.id
                                ? itemClasses.concat(['selected']).join(' ')
                                : itemClasses.join(' ')
                        }
                    >
                        <Todo
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                        >
                            {!todo.completed && (
                                <button onClick={this.handleTodoComplete(todo.id)}>Done</button>
                            )}
                            <button onClick={this.handleTodoDelete(todo.id)}>X</button>
                        </Todo>
                    </li>
                ))}
            </ul>
        )
    }
}

export {
    TodoList
};