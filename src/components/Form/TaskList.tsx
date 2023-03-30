import * as React from 'react';
// Interfaces
import { ITask } from '../../interfaces/Task';


//CSS
import styles from './TaskList.module.sass'

//ICONS
import {BsFillPencilFill} from 'react-icons/bs'
import {BsTrash} from 'react-icons/bs'



export interface IAppProps {
  taskList: ITask[]
  handleDelete(id:number):void
  handleEdit(task:ITask):void
}

export default function TaskList ({taskList,handleDelete,handleEdit}: IAppProps) {



  return (
    <>
    {taskList.length > 0 ? (
      taskList.map((item,index)=>(
        <div key={index} className={styles.task}>
          <div className={styles.details}>
            <h4>{item.title}</h4>
            <p>Dificuldade: {item.difficulty.toString()}</p>
          </div>
          <div className={styles.icons}>
            <span><BsFillPencilFill size={15} onClick={()=>handleEdit(item)}/></span>
            <span><BsTrash onClick={()=> {
              handleDelete(Number(item.id))
            }} size={15} /></span> 
          </div>
        </div>
      ))
    ):(
      <p>Não possui tarefas cadastradas</p>
    )}
  </>
  );
}
