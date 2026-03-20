import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[]
    onToggle: (id: string) => void
    onDelete: (id: string) => void
}

const TodoList = ({todos, onToggle, onDelete}: Props) => {
    if(todos.length === 0) {
        return <p className="text-center text-gray-400">No todos yet!</p>
    }

    return (
        <div className="flex flex-col gap-2">
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default TodoList