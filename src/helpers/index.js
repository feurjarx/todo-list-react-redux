export function generateTodoId() {
    return `todo_${Math.random() % Date.now()}`;
}