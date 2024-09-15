
let name: string = "Ujala Singh";
// var age:number =5;
let age: number | string = "Twenty two"; // | == union

let isAvailable: boolean = false; // boolean 
let hobbies: string[] = ["cricket", "netlix", "book"] // array of strings
let role: [number, string]; //tupple
role = [5, "daddy"]

// object type
// type Person = {
//   name: string;
//   age?: number; // optional
// }

type X = {
  a: string,
  b: number
}

interface Person extends X {
  name: string;
  age?: number;
}

interface Guy extends Person { //extending interface person in interface Guy 
  hobby: string;
}

let GuyInterface: Guy = {
  name: "Ujala singh",
  age: 20,
  hobby: "watching movies"
}



// type Y= X & { // extending type X in type Y
//   c:string,
//   d:number
// }
type Y = Person & {
  c: string,
  d: number
}

let extendY: Y = {
  a: "Ujala",
  b: 20,
  c: "singh",
  d: 2003
}

let person: Person = {
  name: "ujala",
  age: 20
}

let lotsOfpeople: Person[]; // array of object
lotsOfpeople = [
  {
    name: "shami",
    age: 19
  },
  {
    name: "ujala",
    age: 20
  }
]

// void returns undefined
let printName: (name: string) => void;

//never return nothing
let printName1: (name: string) => never;

// function printName(name:string){
//   console.log(name)
// }
// printName("Ujala")

let personName: unknown; // type is unknown
// <div style={{ display: 'flex', gap: '1.5rem' }}>
//   {/* {
//     lotsOfpeople.map((item) => (
//       <>
//         <h1>{item.name}</h1>
//         <h1>{item.age}</h1>
//       </>
//     ))
//   } */}
//   <p>Name: {GuyInterface.name}</p>
//   <p>Age: {GuyInterface.age}</p>
//   <p>Hobby: {GuyInterface.hobby}</p>

// </div>

import { useState } from "react";
import "./App.css"
import Inputfield from "./components/Inputfield";
import { Todo } from "./model";
import TodoList from "./components/TodoList";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: todos.length + 1, todo, isDone: false }]);
      setTodo("");
    }
  }



  console.log(todos)

  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App