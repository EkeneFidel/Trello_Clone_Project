import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <nav className='header'>
        <Link to="/"><i className='bx bxl-trello'></i></Link>
        <h1>Trello Clone</h1>
    </nav>
  )
}
