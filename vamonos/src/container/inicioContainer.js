import React, {Component} from 'react'

import Pantalla1 from './../components/pantalla1'

import firebase from 'react-native-firebase'

class InicioContainer extends Component
{

    constructor(props)
 {    
      super(props)
      this.state = 
      {
           Informacion:[],
       }

   }

   render()
   {
     const { Informacion, } = this.state

     console.log ("render",Informacion)

     return (
        <Pantalla1
            Informacion={Informacion}
        />
      )
    }
  
    componentDidMount()
    {
        this.getInformacion()
    }

    getInformacion =()=>{

        const{Informacion}=this.state

        firebase.firestore().collection('Centros').onSnapshot((snapshot) => {
            snapshot.docChanges.forEach((change) =>{
                if(change.type==='added'){
    
                    Informacion.push({   /* se declaran los campos*/
                        key: change.doc.id,
                        imagen: change.doc.data().imagen,
                        Nombre: change.doc.data().Nombre,
                        Telefono: change.doc.data().Telefono,
                        Ubicacion:change.doc.data().Ubicacion,
                        sitio_web:change.doc.data().sitio_web,
                        Descripcion: change.doc.data().Descripcion,
    
                    })

                    this.setState({
                        Informacion:Informacion,
                    })
    
                }
    
            })

        })

    }
}

export default InicioContainer