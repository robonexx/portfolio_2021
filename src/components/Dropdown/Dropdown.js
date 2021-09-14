import React, { useState } from 'react'
import { DropMenu } from '../Content/index'
import { Link } from 'react-router-dom'
import './Dropdown.scss'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ul onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? 'dropdown-menu close' : 'dropdown-menu'}>
                {DropMenu.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <Link className={item.cName} to={item.path} onClick={() => setIsOpen(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            
        </>
     );
}
 
export default Dropdown;