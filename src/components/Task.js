import { FaTimes } from 'react-icons/fa'

const Task = ({ id, task, onDelete, onToggle }) => {
    return (
    <div className="mx-3" onDoubleClick={() => onToggle(task.id)}>
        <div className={`border-l-4 pl-2 py-1 my-2 bg-gray-100 ${task.reminder ? 'border-green-700' : 'border-transparent'}`}>
            <h3 className="flex justify-between" key={id}>{task.text} 
                <FaTimes
                    className="mr-3 text-red-600 mt-1.5 cursor-pointer align-middle" 
                    onClick={() => onDelete(task.id)}/>
            </h3>
            <p className="text-sm">{task.day}</p>
        </div>
    </div>
  )
}

export default Task