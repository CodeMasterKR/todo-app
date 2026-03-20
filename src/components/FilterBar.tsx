import type { FilterType } from "../types/todo";

interface Props {
    filter: FilterType
    onFilter: (filter: FilterType) => void
}

const filters: FilterType[] = ['all', 'active', 'completed']

const FilterBar = ({filter, onFilter}: Props) => {
    return (
        <div className="flex gap-2">
            {filters.map(f => (
                <button
                    key={f}
                    onClick={() => onFilter(f)}
                    className={`px-4 py-1 rounded-full capitalize ${
                        filter === f ? 'bg-blue-500 text-white' : 'border hover:bg-gray-100'
                    }`}
                >
                    {f}
                </button>
            ))}
        </div>
    )
}

export default FilterBar