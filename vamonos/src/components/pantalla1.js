import React from 'react';
import{
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native'
const Lista = (props) => {
    const { Informacion } = props
    return (
        <View>
            <Text></Text>
            <FlatList
                ListHeaderComponent={
                    () => {
                        return (
                            <View>
                                
                            </View>
                        )
                    }
                }
                style={styles.listaProductos}
                data={Informacion}
                renderItem={
                    ({item}) => {
                        return (
                            <ItemProducto
                                item={item}
                            />
                        )
                    }
                }
            />
        </View>
    )
} 

const ItemProducto = (props) => {

    const { item, } = props

    return (
        <View key={item.key} style={styles.header}>
            <Image
                source={{url: item.imagen}}
                style={styles.headerImage}
                width={150}
                height={198}
            />
        
            <Text style={styles.nombre}>{item.Nombre}</Text>
            <Text style={styles.Numero_telefono}>{item.Telefono}</Text>
            <Text style={styles.Ubicacion}>{item.Ubicacion}</Text>
            <Text style={styles.sitio_web}>{item.sitio_web}</Text>
            <Text style={styles.Descripcion}>{item.Descripcion}</Text>

         </View>
    )

}

const styles = StyleSheet.create({
    listaProductos: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },

header: {
    backgroundColor:'#E5E8E8' ,
    marginTop: 0,
    marginLeft: 0,
    width: 370,
    height: 200,
    borderWidth:1
},
headerImage: {
    backgroundColor: 'white',
    width: '100%',
    height: 150,
    marginTop:0

},
nombre:{
    color:'black',
    marginLeft:150,
    marginRight: 0,
    marginTop:-100,
    fontSize: 20,
    fontFamily: 'Fontastique',
    fontWeight: 'bold',
    fontStyle: 'italic'
    
},
Numero_telefono:{
    color:'black',
    marginLeft:150,
    marginRight:0,
    fontSize: 16,
    marginTop:5,
},
Ubicacion:{
    color:'black',
    marginLeft: 150,
    marginRight: 0,
    margin :100,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop:5,
    
},

sitio_web:{
    color:'black',
    marginLeft: 150,
    marginRight: 0,
    margin :100,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop:5,
    
},

Descripcion:{
    color:'black',
    marginLeft: 150,
    marginRight: 0,
    margin :100,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop:5,
    
},
text3:{
    color:'black',
    backgroundColor: '#0000CC',
    marginLeft: 0,
    marginRight: 0,
    fontSize: 20,
    marginTop:10,
},

fondo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
},
});


export default Lista;