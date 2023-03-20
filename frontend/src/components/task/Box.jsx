import { useState } from 'react'
import './box.css'

export default function Box({ content, setBoxArrays, handleDelete, id }) {
    const [text, setText] = useState(content);
    const [showTrash, setShowTrash] = useState(false);
    function handleShowTrash() {
        setShowTrash(!showTrash)
    }
    function handleContentChange(event) {
        setText(event.target.value);
        setBoxArrays((prev) => {
            return prev.map((item) => {
                if (item.text === content) {
                    return { ...item, text: event.target.value }
                }
                return item
            })
        })
    }
    
  return (
    <div className='box' onMouseEnter={handleShowTrash} onMouseLeave={handleShowTrash} >
        <i className={ showTrash ? 'bx bxs-trash show-trash' : 'bx bxs-trash' } onClick={(id) => handleDelete(id)}></i>
        <textarea className='box-textarea' value={text} onChange={(event) => setText(event.target.value)} >
        </textarea>

    </div>
  )
}
