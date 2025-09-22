'use client'
import React, { use } from 'react'
import {useStore} from '../store/dogStore';

// interface dogInterface {
//   dogs: string[];
//   addDog: (dog: string) => void;
//   removeDog: (dog: string) => void;
// }   
  // todos: {
  //     '82471c5f-4207-4b1d-abcb-b98547e01a3e': {
  //       id: '82471c5f-4207-4b1d-abcb-b98547e01a3e',
  //       title: 'Learn Zustand',
  //       done: false,
  //     },
  //   }
  interface todosInterface {
    [key: string]: {
      id: string;
      title: string;
      done: boolean;
    };
  }
function page() {
   const user = useStore((s) => s.user);
  const increase = useStore((s) => s.increase);
  return (
    <div>
      <h1>Zustand</h1>
      <p>This is a simple example of using Zustand for state management.</p>
      <h2>Todo List</h2>
      <p>User Name: {user.name}</p>
      <p>{Date.now()}</p>
      <button onClick={() => increase()}>Increase Count</button>
      {/* const { todos, toggleTodo } = useTodoStore(); */}
      {/* <ul>
        {Object.values(todos).map((todo) => (
          <li key={todo.id}>
            <label style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul> */}
      {/* <button onClick={() => toggleTodo(`Dog ${dogs.length + 1}`)}>Add Dog</button> */}
      {/* <button onClick={() => addDog(`Dog ${dogs.length + 1}`)}>Add Dog</button>

      <h2>Dog List</h2>
      <button onClick={() => useDogStore.persist.clearStorage()}>clear session storage</button>

      <ul>
        {dogs.map((dog: string, index: number) => (
          <li key={index}>
            {dog}
            <button onClick={() => removeDog()}>Remove</button>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default page
