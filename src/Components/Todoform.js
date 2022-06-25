import React,{useState, useContext} from "react";
import{
    Form,
    FormGroup,
    Button,
    InputGroup,
    Input,
    InputGroupAddon
} from 'reactstrap'

import {v4} from "uuid"
import {TodoContext} from '../Context/TodoContext'
import {ADD_TODO} from '../Context/action.types'

const Todoform = () =>{
    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext)

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === ""){
            return alert("Please Enter a TASK")
        }

        const todo = {
            todoString,
            id : v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("")

    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input 
                type="text"
                name="todo"
                id="todo"
                placeholder="Your Next TODO"
                value={todoString}
                onChange = {e=> setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                <Button 
                color="warning"
                //TODO: onclick
                >ADD
                </Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default Todoform