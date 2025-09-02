import { useState } from "react"

export const Modal = ({ref, setTodoStateAndFn})=>{
     const {todos, setTodos} = setTodoStateAndFn
     const [description, setDescription] = useState('')
     const inputHandle =(e)=>{
          setDescription(e.target.value)
     }
     const handleSubmit = (e)=>{
            e.preventDefault()
           if(description!==''){
             setTodos([...todos,{id: Date.now().toString(),
                description: description,
                date: new Date().toLocaleString(),
                status: false
            }])
            setDescription('')
           }
     }
    return(
        <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
<dialog id="my_modal_1" className="modal absolute z-10"  ref={ref}>
  <div className="modal-box">
    <h3 className="font-bold text-lg">Enter the task ✍️</h3>
     <input value={description} onChange={inputHandle} type="text" className="input my-6 focus:outline-none border-2 border-red-400" placeholder="Type the task...." />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn mx-4 bg-blue-400" onClick={handleSubmit}>Add</button>
        <button className="btn bg-red-400">close</button>
      </form>
    </div>
  </div>
</dialog>
        
        
        </>
    )
}