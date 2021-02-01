import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() { 
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor appointmet',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shooping',
      day: 'Feb 7th at 10am',
      reminder: false
    }
  ])

  return (
    <div className="container">
      <Header title="Task Tracker"/>      
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
