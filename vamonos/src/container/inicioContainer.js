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

        firebase.firestore().collection('Atractivos_Turísticos').onSnapshot((snapshot) => {
            snapshot.docChanges.forEach((change) =>{
                if(change.type==='added'){
    
                    Informacion.push({   /* se declaran los campos*/
                        key: change.doc.id,
                        imagenUrl: change.doc.data().imagenUrl,
                        Nombre: change.doc.data().Nombre,
                        Numero_telefono: change.doc.data().Numero_telefono,
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