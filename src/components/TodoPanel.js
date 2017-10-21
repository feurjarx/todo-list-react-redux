import React from 'react';

class TodoPanel extends React.Component {
    handleTodoCreate() {
        this.props.onTodoAdd(this.props.suggestedTodo);
    }

    handleFormChange(key, valueKey = 'value') {
        let {onSuggestedTodoUpdate} = this.props;
        return (event) => (
            onSuggestedTodoUpdate({
                [key]: event.target[valueKey]
            })
        );
    }

    handleTodoSave() {
        let {
            selectedTodo,
            suggestedTodo,
            onTodoUpdate
        } = this.props;

        onTodoUpdate(selectedTodo.id, suggestedTodo);
    }

    render() {
        let {suggestedTodo, selectedTodo} = this.props;
        return (
            <div className="space-between full-width">
                <div>
                    <label>Title&nbsp;
                        <input
                            type="text"
                            value={suggestedTodo.title}
                            onChange={this.handleFormChange('title')}
                        />
                    </label>
                    &nbsp;
                    <label>Completed
                        <input
                            checked={suggestedTodo.completed}
                            type="checkbox"
                            onChange={this.handleFormChange('completed', 'checked')}
                        />
                    </label>
                </div>
                <div>
                    {!!selectedTodo && (
                        <button onClick={this.handleTodoSave.bind(this)}>
                            <span>Save</span>
                        </button>
                    )}
                    <button onClick={this.handleTodoCreate.bind(this)}>
                        <span>Add</span>
                    </button>
                </div>
            </div>
        );
    }
}

export {
    TodoPanel
};