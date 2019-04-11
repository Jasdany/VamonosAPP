import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import Icon from './icon';

const DetalleServicio = (props) => {

    const { servicio } = props;

    console.log('Producto: ', servicio);

    return (
        <View>
            <Image
                source={{uri: servicio.imagen}}
                style={styles.imagen}
            />

            <View style={styles.containerContent}>
                <View style={styles.containerRow}>
                    <View style={styles.icon}>
                        <Icon
                            name={'bank'}
                            size={24}
                        />
                    </View>
                    <View>
                        <Text>{servicio.Nombre}</Text>
                    </View>
                </View>
                <View
                    style={styles.separador}
                />
                <View style={styles.containerRow}>
                    <View style={styles.icon}>
                        <Icon
                            name={'ballot-outline'}
                            size={24}
                        />
                    </View>
                    <View>
                        <Text>{servicio.Descripcion}</Text>
                    </View>
                </View>
                <View
                    style={styles.separador}
                />
                <View style={styles.containerRow}>
                    <View style={styles.icon}>
                        <Icon
                            name={'phone-in-talk'}
                            size={24}
                        />
                    </View>
                    <View>
                        <Text>{servicio.Telefono}</Text>
                    </View>
                </View>
                <View
                    style={styles.separador}
                />
                 <View style={styles.containerRow}>
                    <View style={styles.icon}>
                        <Icon
                            name={'map'}
                            size={24}
                        />
                    </View>
                    <View>
                        <Text>{servicio.Ubicacion}</Text>
                    </View>
                </View>
                <View
                    style={styles.separador}
                />
                <View style={styles.containerRow}>
                    <View style={styles.icon}>
                        <Icon
                            name={'web'}
                            size={24}
                        />
                    </View>
                    <View>
                        <Text>{servicio.sitio_web}</Text>
                    </View>
                </View>
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    imagen: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    containerContent: {
        padding: 12,
        margin: 24,
        backgroundColor: '#fff',
        borderLeftColor: '#ef5350',
        borderLeftWidth: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    separador: {
        width: '100%',
        height: 1,
        backgroundColor: '#cfd8dc',
        marginTop: 6,
        marginBottom: 6,
    },
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 6,
        marginRight: 6,
    },
});

export default DetalleServicio;