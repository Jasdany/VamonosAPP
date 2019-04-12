import React, {Component} from 'react'

import Pantalla1 from './../components/pantalla1'

import firebase from 'react-native-firebase'

class InicioContainer extends Component
{

    constructor(props)
    {    
        super(props)
        this.state = {
            datos:[],
            isRefresh: false,
            textoBuscar: '',
        }
    }

    handlePressItemProducto = (producto) => {
        this.props.navigation.navigate('detalleServicio', {
            producto: producto,
        })
    }

    render() {
        const {
            datos,
            isRefresh,
            textoBuscar,
        } = this.state;
        console.log ("render",datos)
        return (
            <Pantalla1
                Informacion={this.filtrarDatos(textoBuscar, datos)}
                isRefresh={isRefresh}
                onRefresh={this.handleRefresh}
                onPressItemProducto={this.handlePressItemProducto}
                textoBuscar={textoBuscar}
                onChangeTextBuscar={this.handleChangeTextBuscar}
            />
        )
    }

    filtrarDatos = (texto, arreglo) => {
        return arreglo.filter(item => {
            return item.Nombre ? item.Nombre.indexOf(texto) > -1 : false;
        })
    }

    handleChangeTextBuscar = (texto) => {
        this.setState({
            textoBuscar: texto,
        })
    }

    handleRefresh = () => {
        this.getInformacion();
    };
  
    componentDidMount()
    {
        this.getInformacion()
    }




    getInformacion = () => {

        const db = firebase.firestore();
                

        db.collection('Centros').onSnapshot((instantanea) => {
            this.setState({
                isRefresh: true,
            });
            const { datos } = this.state;
            instantanea.docChanges.forEach((cambio) => {
                const indice = datos.findIndex(item => item.key === cambio.doc.id);
                switch (cambio.type) {
                    case 'added': {
                        console.log("Nombre: ", cambio.doc.data().Nombre);
                        if(indice === -1) {
                            datos.push({
                                key: cambio.doc.id,
                                imagen: cambio.doc.data().imagen,
                                Nombre: cambio.doc.data().Nombre,
                                Telefono: cambio.doc.data().Telefono,
                                Ubicacion: cambio.doc.data().Ubicacion,
                                sitio_web: cambio.doc.data().sitio_web,
                                Descripcion: cambio.doc.data().Descripcion,
                            });
                        }
                        break;
                    }
                    case 'modified': {
                        if(indice !== -1) {
                            datos[indice].imagen = cambio.doc.data().imagen;
                            datos[indice].Nombre = cambio.doc.data().Nombre;
                            datos[indice].Telefono = cambio.doc.data().Telefono;
                            datos[indice].Ubicacion = cambio.doc.data().Ubicacion;
                            datos[indice].sitio_web = cambio.doc.data().sitio_web;
                            datos[indice].Descripcion = cambio.doc.data().Descripcion;
                        }
                        break;
                    }
                    case 'removed': {
                        if(indice !== -1 ) {
                            datos.splice(indice, 1);
                        }
                        break;
                    }
                }
            });
            this.setState({
                datos: datos,
                isRefresh: false,
            });
        });

    }

    

}

export default InicioContainer;