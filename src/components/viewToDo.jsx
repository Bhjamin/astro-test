import axios from "axios"
import './viewToDo.css'
import { useEffect, useState } from "react"

const ViewToDo = ({addedToDo, setAddedToDo}) => {

    const [listToView, setListToView] = useState([])
    const [hidden, setHidden] = useState(true)
    const [updatedToDo, setUpdatedToDo] = useState('')
    const [toDoId, setToDoId] = useState(0)

    const hiddenHandler = () => {
        setHidden(!hidden)
    }

    const updateToDoHandler = () => {
        axios.put('http://localhost:4008/updateToDo', {updatedToDo, toDoId})
        .then(res => {
            setAddedToDo(addedToDo + 1)
        })
    }

    useEffect(() => {
        axios.get('http://localhost:4008/getToDo')
            .then(res => {
                setListToView(res.data)
            })
    }, [addedToDo])

    return(<div className='listContainer'>

        {listToView.map((item) => {
            return <div className="toDoContainer">
                <p>id: {item.id}</p>
                <h2>{item.toDo}</h2>
            </div>
        })}

                <div className="theDivDiv">
                <button onClick={hiddenHandler}>{hidden ? 'Update to-do' : 'Hide'}</button>
                <div className={hidden ? 'hidden' : 'show'}>
                <input onChange={(e) => setUpdatedToDo(e.target.value)} type='text' placeholder="change your to-do"/>
                <input onChange={(e) => setToDoId(e.target.value)} type="number" placeholder="id of to-do"/>
                <button onClick={updateToDoHandler}>Done</button>
                </div>
                </div>



    </div>)
}

export default ViewToDo