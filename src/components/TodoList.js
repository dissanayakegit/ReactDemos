import React from 'react'

let todos = [
    {
        id: 1,
        task_name: 'some1',
        dueraion: '1h'
    },
    {
        id: 2,
        task_name: 'some2',
        dueraion: '2h'
    },
    {
        id: 3,
        task_name: 'some3',
        dueraion: '3h'
    },
    {
        id: 4,
        task_name: 'some4',
        dueraion: '4h'
    },
    {
        id: 5,
        task_name: 'some5',
        dueraion: '5h'
    }
]


const TodoList = () => { 

    const editTodo = (id) => {
        alert(id);
    }

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TASK NAME</th>
                    <th>DURATION</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.task_name}</td>
                            <td>{todo.dueraion}</td>
                            <td><button className="btn btn-warning" onClick={() => editTodo(todo.id)}>Edit</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TodoList
