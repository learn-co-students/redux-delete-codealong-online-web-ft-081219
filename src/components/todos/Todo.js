import React from 'react'

const Todo = props => {

    // const deleteItem = () => {
    //     props.delete(props.text.id)
    // }
    return (
        <div>
            <span>{props.todo.text}</span>
            <button onClick={() => props.delete(props.todo.id)}>Delete</button>
        </div>

        // <div>
        //     <span>{props.text}</span><button onClick={() => props.delete(props.text)}>DELETE</button>
        // </div>
    )
}

export default Todo;


