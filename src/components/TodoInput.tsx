import React, { useState } from "react"

interface Props {
    onAdd: (text: string) => void
}

const TodoInput = ({onAdd}: Props) => {
    const [text, setText] = useState<string>('');

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if(!text.trim()) return
        onAdd(text.trim())
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input 
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add a todo..."
                className="flex-1 border rounded-lg px-4 py-2 outline-none focus-within:ring-2 focus:ring-blue-500"
            />
            <button 
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    )
}

export default TodoInput