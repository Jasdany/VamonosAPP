import React from 'react';
import{
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const LoginApp = (props) => {

    const {
        miOnChangeDeUSuario,
        miOnChangeDePassword,
        miOnPressDeIniciarSesion,
        nombreUsuario,
        contrasenaUsuario,
    } = props;

    return (
     <View style={styles.fon}>
         <Image style={styles.img} source={require('../image/log.png')}/>
        <View style={styles.fondo}>
           
              <Text style={styles.title}> Iniciar Sesion</Text>
              
            <View style = {styles.text}>
                <TextInput
                    onChangeText={miOnChangeDeUSuario}
                    value={nombreUsuario}
                    placeholder="Correo"
                />
            </View>

            <View style = {styles.text}>
                <TextInput
                    onChangeText={miOnChangeDePassword}
                    value={contrasenaUsuario}
                    placeholder="Contraseña"
                />
            </View>
            <View style={styles.recuperacion}>
                <TouchableOpacity>
                    <Text>¡Olvide la Contraseña! </Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style = {styles.margin}>
                    <Button
                        title={'Iniciar Sesion'}
                        color='blue'
                        onPress={miOnPressDeIniciarSesion}
                    />
                </View>
                </View>

            <View style={styles.recuperacion}>
                <TouchableOpacity>
                    <Text> Crear Cuenta </Text> 
                </TouchableOpacity>
            </View>
            
           
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    recuperacion:{
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 20
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    title:{
        color: 'black',
        marginTop:30,
        marginRight:5,
        fontSize:20



    },
    
    img:{
        marginTop: -30,         /*esto es para el logo*/
        marginLeft: 70,       
        marginRight: 10,  
        borderRadius: 15
    },

    fon:{

        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
    },
    fondo: {

        marginTop: -20,
        marginLeft: 32,
        marginRight: 30,
        justifyContent: 'center',
        borderRadius: 20,
        padding: 14,
    },

    margin:{
        marginTop: 8,
        flex: 1,
        margin: 2,
        borderRadius: 100
    },
    text:{
        marginTop: 15,
        backgroundColor: 'transparent',
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 50,
        fontSize: 30,
        height: 40
    },
  
})

export default LoginApp;