import React from 'react'
import './App.css'
import { Header, Panel, TodoList, } from './components/index'
import { Box } from '@mui/material'

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};


export const App = () => {

  const [editTodoId, setEditTodoId] = React.useState<number | null>(null)

  const [todoList, setTodoList] = React.useState([
    {id: 1, name: 'Утром', description: 'пресс качат, бегит, турник, анжуманя', checked: true},
    {id: 2, name: 'Обед', description: 'анжуманя, турник, бегит, пресс качат', checked: false},
    {id: 3, name: 'Вечер', description: 'бегит, пресс качат, анжуманя, турник', checked: false},
  ])

  const onEdit = (id: Todo['id']) => {
    setEditTodoId(id)
  }

  const onDeleteTodo = (id: Todo['id']) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const onAddTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    const newId = todoList.length > 0 
      ? Math.max(...todoList.map(todo => todo.id)) + 1 
      : 1;
  
    setTodoList([{ id: newId, name, description, checked: false }, ...todoList]);
  };

  const onCheckTodo = (id: Todo['id']) => {
    setTodoList(todoList.map(todo => {
      if(todo.id === id) {
        return {...todo, checked: !todo.checked };
      }
      return todo;
      })
    );
  };

  const onChangeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList(todoList.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setEditTodoId(null)
  }

  return (
    <div className='flex justify-center items-center text-center mt-40'>
      <Box display='flex' flexDirection='column'>
        <Header todoCount={todoList.length}/>
        <Panel onAddTodo={onAddTodo}/>
        <TodoList
          editTodoId={editTodoId}
          todoList={todoList} 
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onEdit={onEdit}
          onChangeTodo={onChangeTodo}/>
      </Box>
    </div>
  )
} 
