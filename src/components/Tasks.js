import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="my-5">
        {tasks.map((task, index) => (
            <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </div>
  )
}

export default Tasks