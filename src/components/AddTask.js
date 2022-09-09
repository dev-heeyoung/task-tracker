import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [ text, setText ] = useState('')
    const [ day, setDay ] = useState('')
    const [ reminder, setReminder ] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        } 

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)

    }

  return (
    <form onSubmit={ onSubmit }>
        <div className="flex flex-col mx-3 mt-1">
            <label className="font-medium">Task</label>
            <input 
                className="border-2 rounded pl-2 mt-1 mb-2 text-sm w-full h-7"
                name="text" 
                value={text}
                type="text" 
                placeholder="Add Task" 
                onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="flex flex-col mx-3 mt-1">
            <label className="font-medium">Day & Time</label>
            <input 
                className="border-2 rounded pl-2 mt-1 mb-2 text-sm w-full h-7"
                name="day" 
                value={day}
                type="text" 
                placeholder="Add Day & Time" 
                onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="flex mx-3 mt-1 mb-3">
            <label className="font-medium">Set Reminder</label>
            <input
                className="ml-3 w-4" 
                name="reminder" 
                checked={reminder}
                value={reminder}
                type="checkbox" 
                onChange={(e) => setReminder(e.target.checked)}/> 
        </div>
        <div className="text-center">
            <input className="bg-black text-white text-sm border rounded w-11/12 h-8" type="submit" />
        </div>
    </form>
  )
}

export default AddTask