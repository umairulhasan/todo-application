import Image from 'next/image'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
export default function Home() {
  return (
  
   <main className="bg-gradient-to-tr from-MyBestColor1 to-MyBestSecoundColor1 h-screen 
   flex justify-center items-center text-center">
    <div className="px-3 py-4 rounded-xl w-full max-w-md bg-white">
      {/* TodoList */}
      {/* @ts-ignore */}
      <TodoList/>

      {/* for todo input data  */}
      <AddTodo/>
      {/* for line */}
      <div className="w-1/2 h-2 bg-black rounded mx-auto mt-4"> </div>
    </div>
    
   </main>

  )
}
 