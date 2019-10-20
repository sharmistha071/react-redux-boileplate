import React, { useState } from 'react'
import '../styles/components/Button.scss'



const Button = () => {
    const [active, setActive] = useState(false)
    return (
        <button className="button">Button Component</button>
    )
}


export default Button