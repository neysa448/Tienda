import React from 'react'
import PropTypes from 'prop-types' 

const Contenido = ({value}) => {
    return(
        <div>
            <table>
                <thead className="encabezado">
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tr>
                    <td>Coca-Cola</td>
                    <td>5</td>
                    <td>$20</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Coca-Cola</td>
                    <td>5</td>
                    <td>$20</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Coca-Cola</td>
                    <td>5</td>
                    <td>$20</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Coca-Cola</td>
                    <td>5</td>
                    <td>$20</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>Coca-Cola</td>
                    <td>5</td>
                    <td>$20</td>
                    <td>$100</td>
                </tr>
                <thead className="total">
                <tr>
                    <th>Total</th>
                    <th></th>
                    <th></th>
                    <th>$500</th>
                </tr>
                </thead>
            </table>
            <span>{value}</span>
        </div>
    )
}

Contenido.defaultProps = {
    value : "0"
}

Contenido.proptotype = {
    vale : PropTypes.string.isRequired
}

export default Contenido