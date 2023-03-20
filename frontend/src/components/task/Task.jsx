import { useState } from 'react'
import Box from "./Box"
import './task.css'

export default function Task({ title, type }) {
    const [boxArrays, setBoxArrays] = useState([
        {
            id: 1,
            text: 'New Task',
        }
    ])
    function handleAdd() {
        setBoxArrays([...boxArrays, { id: boxArrays.length + 1, text: 'New Task' }])
    }

    function handleDelete() {
        setBoxArrays(boxArrays.filter((item) => item.id !== boxArrays.length))
    }
  return (
    <div className="task-container">
        <h1 className={`task-title ${type}`}>{ title }</h1>
        <div className="add" onClick={handleAdd}>
            <i className='bx bx-plus'></i>
        </div>
        <div className="task-content">
            {boxArrays.map((box) => {
                return <Box key={box.id} content={box.text} setBoxArrays={setBoxArrays} handleDelete={handleDelete} id={box.id} />
            })}
        </div>
    </div>
  )
}
