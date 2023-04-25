import axios from 'axios'
import './addToDo.css'
import { useState } from "react"


const AddToDo = ({setAddedToDo, addedToDo}) => {

    const [newToDo, setNewToDo] = useState('')

    const clickHandler = () => {
        axios.post('http://localhost:4008/addToDo', {toDo: newToDo, id: addedToDo})
        setAddedToDo(addedToDo + 1)
        setNewToDo('')
    }

    const clearListHandler = () => {
        axios.delete('http://localhost:4008/clearList')
        .then(res => {
            console.log(res.data)
            setAddedToDo(addedToDo + 1)
        })
        .catch(err => console.log(err))
    }


    return(<div>

        <section className="container2">
            <h1 className="welcome-text">To-do List</h1>

        <div className="newToDo">
            <h3>Add a new to-do item</h3>

            <div className="inputDiv">
                <input onChange={(e) => {setNewToDo(e.target.value)}} value={newToDo} type="text" placeholder="enter a to-do"/>
                <button onClick={clickHandler}>Add</button>
            </div>
        </div>

        <button onClick={clearListHandler} className='clearBtn'>Clear List</button>

        </section>
        

    </div>)
}

export default AddToDo