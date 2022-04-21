import React, { useEffect, useRef } from 'react'
import './todo.css'
function Todo() {
  // const form  = useRef(null)
  const input = useRef(null)
  const todos = useRef(null)

  useEffect(()=>{
      // todo()
      const form = document.getElementById('form');
      const input = document.getElementById('input');
      const todosUl = document.getElementById('todos')

      form.addEventListener('submit',(e) =>{
        e.preventDefault();
        addtodo()
      })
  
      // const todos = JSON.parse(localStorage.getItem('todos'))
      //   if(todos){
      //     todos.forEach((todo)=>{
      //       addtodo(todo)
      //     })
      //   }
  
      function addtodo(todo){

        

        let todoText = input.value;
        if(todo) {
          todoText = todo.text
        }
        console.log(todoText);

        if(todoText){
          const todoElement = document.createElement('li')
          if(todo && todo.completed){
            todoElement.classList.add('completed')
          }
          todoElement.innerText = todoText;

          todoElement.addEventListener('click', ()=>todoElement.
          classList.toggle('completed'))

          todoElement.addEventListener('contextmenu', (e)=>{

            todoElement.remove()
          })
          todosUl.appendChild(todoElement)
          input.value = ''
          // updateList()
        }
      }
      // const updateList = () =>{
      //  const todosEl = document.querySelectorAll('li')

      //   const todos = []
      //   todosEl.forEach((todoEl)=>{
      //     todos.push({
      //       text:todoEl.innerText,
      //       completed: todoEl.classList.contains('completed')
      //     })
      //   })
      //   localStorage.setItem('todos', JSON.stringify(todos))
      // }
  },[])

  

  return (
    <>
        <h1>todos</h1>
        <form  id='form' >
            <input type="text" className='input' name="" id="input"
            placeholder='Enter your todo' autoComplete='off'  ref={input}/>

            <ul className='todos' id='todos' ref={todos}>
              

            </ul>
        </form>
        <small>Left click to toogle completed <br />
        right click to delete</small>
    </>
  )
}

export default Todo