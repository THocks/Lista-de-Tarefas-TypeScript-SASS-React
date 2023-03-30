import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import TaskForm from "./components/Form/TaskForm";
import TaskList from "./components/Form/TaskList";
import Modal from "./components/Modal/Modal";
//SASS
import stlyes from "./App.module.sass";

//Interface
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskEdit,setTaskEdit] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const openOrCloseModal = (display :boolean) => {
    const modal = document.querySelector('#modal')

    if(display){
      modal!.classList.remove('modalHide')
    } else {
      modal!.classList.add('modalHide')
    }
  }

   const editTask = (task:ITask):void =>{

    openOrCloseModal(true)
    setTaskEdit(task)

   }

   const updateTask = (id:number,title:string, difficulty:number)=> {

    const updatedTask: ITask = {id,title,difficulty}

     const updatedItems = taskList.map((task)=>{
      return task.id === updatedTask.id ? updatedTask : task
     })


     setTaskList(updatedItems)

     openOrCloseModal(false)
   }

  return (
    <div>
      <Modal children={<TaskForm 
      btnText="Editar Tarefa" 
      taskList={taskList}
      task={taskEdit}
      handleUpdate={updateTask}
      />
      } />
      <Header />
      <main className={stlyes.main}>
        <div>
        

          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          
          <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
