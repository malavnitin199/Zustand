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

// import { create } from 'zustand'
// import { persist, createJSONStorage, devtools, } from 'zustand/middleware'

// interface dogInterface {
//   dogs: string[];
//   cats: string[];
//   addDog: (dog: string) => void;
//   removeDog: () => void;
// }
// export const useDogStore = create<dogInterface>()(
//   devtools(persist(
//     (set, get) => ({
//        dogs: [],
//        cats: [],
//     addDog: (dog) => set((state) => ({ dogs: [...state.dogs, dog] })),
//     removeDog: () => set((state) => ({ dogs: state.dogs.filter((d,i) => i !== state.dogs.length-1) })),
//     }),
//     {
//       name: 'Dog-storage', // name of the item in the storage (must be unique)
//       storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//       partialize: (state) => ({ dogs: state.dogs }), // (optional) only persist the dogs array
//      version: 6, // a migration will be triggered if the version in the storage mismatches this one
//       migrate: (persistedState:any, version:number) => {
//         if (version === 0) {
//           // if the stored value is in version 0, we rename the field to the new name
//           persistedState.newField = persistedState.oldField
//           delete persistedState.oldField
//         }

//         return persistedState
//       },
//     },
//   ),{
//     name: 'Dog-storage', // name of the item in the storage (must be unique)
//   })
// )

// export default useDogStore;


//immer
// import { create } from 'zustand'
// import { persist, createJSONStorage, devtools, } from 'zustand/middleware'
// import { immer } from 'zustand/middleware/immer'


// type Todo = {
//   id: string
//   title: string
//   done: boolean
// }

// type State = {
//   todos: Record<string, Todo>
// }

// type Actions = {
//   toggleTodo: (todoId: string) => void
// }

// export const useTodoStore = create<State & Actions>()(
//  (set) => (
//   {
//     todos: {
//       '82471c5f-4207-4b1d-abcb-b98547e01a3e': {
//         id: '82471c5f-4207-4b1d-abcb-b98547e01a3e',
//         title: 'Learn Zustand',
//         done: false,
//       },
//       '354ee16c-bfdd-44d3-afa9-e93679bda367': {
//         id: '354ee16c-bfdd-44d3-afa9-e93679bda367',
//         title: 'Learn Jotai',
//         done: false,
//       },
//       '771c85c5-46ea-4a11-8fed-36cc2c7be344': {
//         id: '771c85c5-46ea-4a11-8fed-36cc2c7be344',
//         title: 'Learn Valtio',
//         done: false,
//       },
//       '363a4bac-083f-47f7-a0a2-aeeee153a99c': {
//         id: '363a4bac-083f-47f7-a0a2-aeeee153a99c',
//         title: 'Learn Signals',
//         done: false,
//       },
//     },
//     toggleTodo: (todoId: string) =>
//       set((state) => ({
//         // todos: {
//         //   ...state.todos,
//         //   [todoId]: {
//         //     ...state.todos[todoId],
//         //     done: !state.todos[todoId].done,
//         //   },
//         // },
//         todos:{...state.todos,
//           [todoId]: {
//             ...state.todos[todoId],
//             done: !state.todos[todoId].done,
//           },
//         },
//       })),
//   }
// ),
// )


//subscribeWithSelector
import { create } from 'zustand'
import { persist, createJSONStorage, devtools, subscribeWithSelector } from 'zustand/middleware'

export const useStore = create((set) => ({
  count: 0,
  user: { name: 'Nitin' },
  increase: () => set((s:any) => ({ count: s.count + 1 })),
}))