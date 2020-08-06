import React from 'react'
import github from '../../Assets/github.png'
import '../Link/Link.css'
const  Link=()=> {
    return (
        <div className='link-box'>
            <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className='link'> 
                <img src={github} alt="Github Icon" width='30px' height='30px'/>
            </a>
        </div>
    )
}

export default Link;