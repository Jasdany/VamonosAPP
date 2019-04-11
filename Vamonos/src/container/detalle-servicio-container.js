import React, { Component } from 'react';
import DetalleServicio from './../components/detalle-servicio';

class DetalleServicioContainer extends Component {

    render() {

        const producto = this.props.navigation.getParam('producto', {})

        return (
            <DetalleServicio
                servicio={ producto }
            />
        )

    }

}

export default DetalleServicioContainer;