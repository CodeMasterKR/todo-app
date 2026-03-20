import type { Todo } from "../types/todo";

interface Props {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
    return (
        <div className="flex items-center gap-3 p-3 border rounded-lg">
            <button onClick={() => onToggle(todo.id)}>
                <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center
            ${todo.completed ? "bg-blue-500 border-blue-500" : "border-gray-400"}`}
                >
                    {todo.completed && (
                        <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    )}
                </div>
            </button>
            <span
                className={`flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}
            >
                {todo.text}
            </span>
            <button
                onClick={() => onDelete(todo.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
            >
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0   24 24"
                    stroke="currentColor"
                >
                    {" "}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 
  12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0         00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </button>
        </div>
    );
};

export default TodoItem;
