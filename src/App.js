import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

function App() {
  const [ addFormState, setAddFormState ] = useState(false)
  const [ tasks, setTasks ] = useState(
    [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30pm",
        reminder: false,
      },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> 
    task.id === id ? { ...task, reminder: !task.reminder } : task
    ));
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = { id , ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <div className="max-w-sm mx-auto border-2 rounded py-4 my-3">
        <Header addFormState={addFormState} onToggle={() => setAddFormState(!addFormState)}/>
        {addFormState && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
        : (<div className="mx-4 my-5">No Tasks To Show</div>)
        }
        <Footer />
      </div>
    </div>
  );
}

export default App;
