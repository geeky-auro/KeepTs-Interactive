import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

let name:string='Auro';
let age:number=25;
let hobbies: string[];
let tuple:[string, number, number];
tuple=['2',3,4];

type Person ={
  name: string;
  age: number;
  hobbies?: string[];
}

// difference between type and interface.
// difference between never and void.

interface Person1{
  name: string;
  age: number;
  hobbies?: string[];
}

let person:Person={
  name: name,
  age: age,
}
// So here the below component is a Functional Component
// We are providing a type of React.FC
const App:React.FC=()=> {
  const [todo,setTodo] =useState<string>("");
  // Another State which will contain all of our todo ;)
  const [todos,setTodos]=useState<Todo[]>([])

  const handleAdd =(e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
      setTodo('');
    }
  }
  console.log(todos);
  return (
    <div className='App'>
      <span className="heading">Taskify</span>
      <InputField 
      todo={todo}
      setTodo={setTodo}
      handleAdd={handleAdd}
      />
      {/* {todos.map((t)=>(
        <ul>
          <li>{t.id}</li>
          <li>{t.todo}</li>
          <li>{t.isDone}</li>
        </ul>
      ))} */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
