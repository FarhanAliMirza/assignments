
import './App.css'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

function App() {
  
  return <RecoilRoot>
    <Updater id={2}/>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />


  </RecoilRoot>
}

function Updater({id}) {
  const updateTodo = useSetRecoilState(todosAtomFamily(id));

  useEffect(()=>{
    setTimeout(()=>{
      updateTodo((oldTodo) => {
        return {
          ...oldTodo,
          title: "Updated title",
          description: "Updated description"
        }
      })
    }, 5000)
  },[])
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
