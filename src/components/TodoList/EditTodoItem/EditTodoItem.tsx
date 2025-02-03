import React from 'react'
import { TextField, Paper, Button } from '@mui/material'
import { Edit as EditIcon} from '@mui/icons-material';
import type { Todo } from '../../../App';


interface EditTodoItemProps {
    todo: Todo;
    onChangeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo,  onChangeTodo }) => {
    const [editTodo, setEditTodo] = React.useState({name: todo.name, description: todo.description});

    const onClick = () => {
        onChangeTodo(editTodo);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setEditTodo({...todo, [name]: value })
    }    

    return (
        <Paper elevation={2} sx={{ maxWidth: '800px', marginTop: '15px', padding: '15px 25px', borderRadius: '15px', 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px'}}>
            <TextField name='name' label='Todo Name' value={editTodo.name} onChange={onChange}/>
            <TextField name='description' label='Todo Description' value={editTodo.description} onChange={onChange}/>
            <Button startIcon={<EditIcon/>}  variant="outlined" onClick={onClick}>Edit</Button>
        </Paper>
    );
}

