import React from 'react'
import { TextField, Paper, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import type { Todo } from '../../App';

const DEFAULT_TODO = {name: '', description: ''}


interface PanelProps {
    onAddTodo: ({ name, description}: Omit<Todo, 'id' | 'checked'>) => void

}

export const Panel: React.FC<PanelProps> = ({onAddTodo}) => {
    const [todo, setTodo] = React.useState({name: '', description: ''});

    const onClick = () => {
        onAddTodo(todo)
        setTodo(DEFAULT_TODO);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setTodo({...todo, [name]: value })
    }

    return (
        <Paper elevation={3} sx={{ width: '100%', padding: '20px 30px', borderRadius: '3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px'}}>
            <TextField name='name' label='Todo Name' value={todo.name} onChange={onChange} autoComplete="off"/>
            <TextField name='description' label='Todo Description' value={todo.description} onChange={onChange}/>
            <Button startIcon={<AddIcon/>}  variant="outlined" onClick={onClick}>Add</Button>
        </Paper>
    ) 
}
  
