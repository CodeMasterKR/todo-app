import FilterBar from "./components/FilterBar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

const App = () => {
    const { filteredTodos, filter, setFilter, addTodo, toggleTodo, deleteTodo } = useTodos()
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center py-10">
            <div className="w-full max-w-md flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-center text-blue-500">
                    Todo App
                </h1>
                <TodoInput onAdd={addTodo} />{" "}
                <FilterBar filter={filter} onFilter={setFilter} />
                <TodoList
                    todos={filteredTodos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                />
            </div>{" "}
        </div>
    );
};

export default App;
