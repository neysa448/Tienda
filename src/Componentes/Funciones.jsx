import React from 'react'
import PropTypes from 'prop-types'
import Button from './Botones/Botones'

const funciones = ["Contenido","Agregar","Eliminar","Realizar compra","Cancelar compra","Registrar producto","Eliminar producto","Ver inventario"]

const renderButtons = onClickNumber => {
    const renderButton = funcion => (
        <Button key={funcion} text={funcion.toString()} clickHandler={onClickNumber}></Button>
    )
    return funciones.map(renderButton)
}

const Funciones = ({onClickNumber}) => (
    <section className="numbers">
        {renderButtons(onClickNumber)}
    </section>
)

Funciones.propTypes = {
    onClickNumber : PropTypes.func.isRequired
}

export default Funciones