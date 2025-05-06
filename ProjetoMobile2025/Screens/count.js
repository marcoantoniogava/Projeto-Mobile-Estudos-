import {View , Text, Button, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function Count() {

    const [contador, setContador] = useState(0);

    function Aumentar() {
        setContador(contador + 1);
    }

    function Diminuir() {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <View style={styles.ImageBackground}>
            <ImageBackground source={require('../assets/backgroundhome.png')} resizeMode="cover">
            </ImageBackground>
            <View style={styles.container}>
                <Text style={styles.tittle}>Meu Contador!</Text>
                <Text style={styles.text}>Contador: {contador}</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={Aumentar}>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Diminuir}>
                </TouchableOpacity>
                <Button title="+" color={'#6200ee'} onPress={Aumentar}/>
                <Button title="-" color={'#6200ee'} onPress={Diminuir}/>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    ImageBackground: {
        flex: 1,
        width: "auto",
        height: 1080,
    },
    container: {
        alignItems: 'center',
    },
    tittle: {
        fontSize: 40,
        color: '#000',
        padding: 10,
    },
    text: {
        fontSize: 25,
        color: '#000',
        padding: 10,
    },
    buttonContainer: {
        marginTop: 20,
        padding: 10,
        width: 300,
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#64032f',
        width: '50%',
    },
})
