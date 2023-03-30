import React,{useState,ChangeEvent,FormEvent,useEffect} from 'react'


//CSS
import styles from './TaskForm.module.sass'

//Interface
import { ITask } from '../../interfaces/Task';

export interface IAppProps {
  btnText?: string 
  taskList:ITask[]
  setTaskList?:React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(id:number,title:string, difficulty:number):void
}

export default function TaskForm ({btnText,taskList,setTaskList,task,handleUpdate}: IAppProps) {
  const [id,setId] = useState<number>(0)
  const [title,setTitle]=useState<string>('')
  const [difficulty, setDifficulty] = useState<number>(0)


  // Função - Inclusão De Tarefas
  const addTask = (e:FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    if (handleUpdate) {

      handleUpdate(id,title,difficulty)
      
    } else {
       const id = Math.floor(Math.random()* 1000)
    const newTask: ITask = {id,title,difficulty}
    
     setTaskList!([...taskList,newTask])
     
     setTitle('')
     setDifficulty(0)
    
     console.log(taskList)
      
    }
     
   
  }



  const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    if(e.target.name === 'tarefa') {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  
  }

  useEffect(()=>{
    if(task) {
      setId(Number(task.id))
      setTitle(task.title.toString())
      setDifficulty(Number(task.difficulty))
    }
  },[task])

  return (

    <div className={styles.container}>
    <div className={styles.screen}>
      <div className={styles.screen__content}>
        <form onSubmit={addTask} className={styles.task}>
          <div className={styles.task__field}>
        
            <input 
              type="text" 
              name="tarefa"
              value={title}
              placeholder="Qual tarefa de hoje"
              onChange={handleChange} 
              className={styles.task__input} 
            />
          </div>
          <div className={styles.task__field}>
            
            <input 
              type="text" 
              name="Dificuldade"
              value={difficulty}
              placeholder="Qual a dificuldade da tarefa?" 
              onChange={handleChange}
              className={styles.task__input} 
            />
          </div>
          <input 
            type="submit" 
            className={`${styles.button} ${styles.task__submit}`} 
            value={btnText}
            
          >

           
          </input>       
        </form>
      </div>
      <div className={styles.screen__background}>
        <span className={`${styles.screen__background__shape} ${styles.screen__background__shape4}`}></span>
        <span className={`${styles.screen__background__shape} ${styles.screen__background__shape3}`}></span>    
        <span className={`${styles.screen__background__shape} ${styles.screen__background__shape2}`}></span>
        <span className={`${styles.screen__background__shape} ${styles.screen__background__shape1}`}></span>
      </div>    
    </div>
  </div>
  
  );
}




