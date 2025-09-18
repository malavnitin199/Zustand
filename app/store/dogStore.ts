// import { create } from 'zustand'

// import { persist, createJSONStorage } from 'zustand/middleware'
// const useDogStore = create((set) => ({
//   persist((set) => ({
//     dogs: [],
//     addDog: (dog) => set((state) => ({ dogs: [...state.dogs, dog] })),
// })
// { name: 'dog-storage' },
// ) , ))

// export default useDogStore;

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export const useDogStore = create()(
  persist(
    (set, get) => ({
       dogs: [],
    addDog: (dog) => set((state) => ({ dogs: [...state.dogs, dog] })),
    removeDog: () => set((state) => ({ dogs: state.dogs.filter((d,i) => i !== state.dogs.length-1) })),
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

export default useDogStore;
