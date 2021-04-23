import React from 'react'
import PropTypes from 'prop-types'
import './Botones.css'

const Button = ({type,text,clickHandler}) => {
    return(
        <button className={type} onClick={() => {
            console.log("");
            clickHandler(text);
        }}>
            <span>{text}</span>
        </button>
    )
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    type : PropTypes.string,
    clickHandler : PropTypes.func.isRequired
}

export default Button