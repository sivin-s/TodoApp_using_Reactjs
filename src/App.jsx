
import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import {Modal,TodoList} from './components/index';
// import {todoContextProvider} from './context/todoContext'

function App() {
   const [completed, setCompleted] = useState(false)
   const [todos, setTodos] = useState([]) 
  
 
  const modalRef = useRef(null);
  // modal 
  function handleOpenModal(e){
    e.preventDefault()
    modalRef.current.showModal()
  }
  //
  // edit the todo-list
  function handleEdit(e,editDescription){
      // console.log("p>>>",editDescription,e)
      e.preventDefault()
      // console.log('hd>',e.target.dataset.id)
      if( e.target.dataset.btn==='edit_btn' && e.target.dataset.id){
     setTodos(todos.map((cu)=>{
          if(cu.id===e.target.dataset.id){
             return {...cu,description: editDescription}
          }
          return {...cu}
        }))
      }
      // console.log(todos)
  }
// delete the todo
  function handleDelete(e){
        // console.log(e.target.dataset)
         if(e.target.dataset.btn==='delete_btn'){
           setTodos(todos.filter((cu)=>{
                 if(cu.id!==e.target.dataset.id){
                    return {...cu}
                 }
           }))
         }
  }
  // handle status completed
  const handleStatus = (e)=>{
      // console.log(e.target.dataset)
      setTodos(todos.map((cu)=>{
         if(cu.id===e.target.dataset.id){
            return {...cu,status:true}
         }
         return {...cu}
      }))
  }


  return (
    <main className='container h-screen max-w-full flex items-center justify-center  border'>
       
          {/* modal -dialog tag- */}
        <Modal  ref={modalRef} setTodoStateAndFn={{todos,setTodos}}/>

        <div  className='border-1  border-orange-500 flex flex-col  h-[26rem] w-[21.3rem] rounded-2xl'>
          <div className='bg-orange-500 rounded-tl-2xl   rounded-tr-2xl border-2 flex items-center justify-around  border-red-500 h-[5rem] w-full'>
                  <h1 className='capitalize text-3xl font-bold'>ToDO LIST</h1>
                  {/* add  button */}
                  <button onClick={handleOpenModal}  className='block cursor-pointer  self-center'>
                    <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd"/>
</svg>

                  </button>
          </div>
                 <ul className="list p-2.5 overflow-y-scroll scroll-smooth bg-base-100  shadow-md  h-[20rem] w-[21rem]">
          {/* list component*/}
          {todos.length>0 && todos.map((cuData)=>(
             <TodoList key={cuData.id} data={cuData} handleEdit={handleEdit} handleDelete={handleDelete}  handleStatus={ handleStatus} />
          ))}

          {/**/}
        </ul>
        </div>
   

     
    </main>
  )
}

export default App
