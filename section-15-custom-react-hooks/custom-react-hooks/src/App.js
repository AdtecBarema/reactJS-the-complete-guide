import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import useHttp from './hooks/use-http';

function App() {
 
  
  const [tasks, setTasks] = useState([]);

  const transformTasks = tasksObj=>{
    const loadedTasks = [];

    for (const taskKey in loadedTasks) {
      loadedTasks.push({ id: taskKey, text: loadedTasks[taskKey].text });
    }

    setTasks(loadedTasks);
  }


  const {isLoading, error, sendRequest:fetchTasks} = useHttp({url: "https://addis-e-commerce-default-rtdb.firebaseio.com/tasks.json"},transformTasks);
  

  
  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
