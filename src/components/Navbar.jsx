import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar(){
  return (
    <div className='navbar'>
        <Link className='home-button' to='/'>
        <img className='home-img-button' src='src\assets\calli-home-img.png'/>
        </Link>
        <nav className='page-selection'>
            <ul>
                <Link className='page-link' to='training'>Organizar Treinos</Link>
                <Link className='page-link' to='evolution'>Evolução</Link>
                <Link className='page-link' to='history'>Histórico</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar