import Box from "./Box"
import './task.css'

export default function Task({ title }) {
  return (
    <div className="task-container">
        <h1 className="task-title">{ title }</h1>
        <div className="add">
        <i class='bx bx-plus'></i>
        </div>
        <Box />
    </div>
  )
}
