'use client'
import React, { use } from 'react'
import useDogStore from '../store/dogStore';

interface dogInterface {
  dogs: string[];
  addDog: (dog: string) => void;
  removeDog: (dog: string) => void;
}   
  
function page() {
  const { dogs, addDog, removeDog } = useDogStore();

  return (
    <div>
      <h1>Zustand</h1>
      <p>This is a simple example of using Zustand for state management.</p>
      <button onClick={() => addDog(`Dog ${dogs.length + 1}`)}>Add Dog</button>

      <h2>Dog List</h2>
      <button onClick={() => useDogStore.persist.clearStorage()}>clear session storage</button>

      <ul>
        {dogs.map((dog: string, index: number) => (
          <li key={index}>
            {dog}
            <button onClick={() => removeDog()}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
