import React from 'react';
import{
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    RefreshControl,
    Image,
    TouchableOpacity,
    Linking,
} from 'react-native'

import Icon from './icon';

const Lista = (props) => {

    const {
        Informacion,
        isRefresh,
        onRefresh,
        onPressItemProducto,
    } = props

    return (
        <View>

            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={isRefresh}
                        onRefresh={onRefresh}
                    />
                }
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
                ItemSeparatorComponent={
                    () => {
                        return (
                            <View
                                style={{
                                    flex: 1,
                                    margin: 8,
                                    borderWidth: 0.5,
                                    borderColor: 'rgba(0,0,0,0.05)',
                                }}
                            />
                        )
                    }
                }
                renderItem={
                    ({item}) => {
                        return (
                            <ItemProducto
                                item={item}
                                onPressItemProducto={onPressItemProducto}
                            />
                        )
                    }
                }
            />
        </View>
    )
} 

const ItemProducto = (props) => {

    const { item, onPressItemProducto } = props

    return (
        <TouchableOpacity onPress={() => { onPressItemProducto(item) }}>
            <View key={item.key} style={styles.item}>
                <View style={styles.containerImage}>
                    <Image
                        source={{uri: item.imagen}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.containerContent}>
                    <View style={styles.containerText}>
                        <Text style={styles.nombre}>{item.Nombre}</Text>
                        <Text style={styles.ubicacion}>{item.Ubicacion}</Text>
                        
                    </View>
                    <View style={styles.containerBoton}>
                        <TouchableOpacity style={styles.containerBotonMostrar}>
                            <View 
                                style={{
                                    ...styles.boton,
                                    ...styles.botonMostrar,
                                }}
                            >
                                <Icon
                                    name={'arrow-expand'}
                                />
                                <Text>Mostrar</Text>
                            </View>
                        </TouchableOpacity>
                        <View
                            style={{
                                width: 6,
                            }}
                        />
                        <TouchableOpacity
                            style={styles.containerBotonLlamar}
                            onPress={
                                () => {
                                    Linking.openURL(`tel:${item.Telefono}`)
                                }
                            }
                        >
                            <View
                                style={{
                                    ...styles.boton,
                                    ...styles.botonLlamar,
                                }}
                            >
                                <Icon
                                    name={'phone-in-talk'}
                                />
                                <Text>Llamar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    listaProductos: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    item: {
        flexDirection: 'row',
        flex: 1,
        margin: 6,
    },
    image: {
        width: 115,
        height: 115,
        resizeMode: 'cover',
        borderRadius: 12,
        backgroundColor: '#ccc',
    },
    nombre: {
        color: '#263238',
        fontSize: 18,
        fontWeight: 'bold',
    },
    containerContent: {
        flex: 1,
        marginLeft: 6,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    containerText: {
        flex: 1,
    },
    containerBoton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boton: {
        padding: 12,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        flexDirection: 'row',
    },
    containerBotonMostrar: {
        flex: 1,
    },
    botonMostrar: {
        color: '#fff',
        backgroundColor: 'rgba(33,150,243,0.05)',
        borderColor: '#2196f3',
    },
    containerBotonLlamar: {
        flex: 1,
    },
    botonLlamar: {
        color: '#fff',
        backgroundColor: 'rgba(244,67,54,0.05)',
        borderColor: '#f44336',
    },
});

export default Lista;