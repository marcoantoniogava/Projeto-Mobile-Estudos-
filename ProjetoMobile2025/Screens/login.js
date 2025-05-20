import { View, Text, StyleSheet, ImageBackground, Button, TextInput } from "react-native";
import { useState } from "react";
import { auth } from '../controller.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const VeficaUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigation.navigate('Home');
            })
            .catch((error) => {
                console.log("Erro ao logar: ", error);
            });
    }

    return (
        <View style={styles.ImageBackground}>
            <ImageBackground source={require('../assets/backgroundhome.png')} resizeMode="cover" style={styles.backgroundImage}>
            </ImageBackground>
            <Text style={styles.txt1}>Olá, seja bem vindo ao Login!</Text>
            <View style={styles.row}>
                <TextInput
                    style={styles.txtinput}
                    placeholder="Usuário"
                    placeholderTextColor={'black'}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.txtinput}
                    placeholder="Senha"
                    placeholderTextColor={'black'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    color={'blue'}
                    onPress={() => VeficaUser()}
                />
            </View>
            <View style={styles.registerButtonContainer}>
                <Text style={styles.registerText}>Não tem uma conta?</Text>
                <Button
                    title="Cadastre-se"
                    color={'green'}
                    onPress={() => navigation.navigate('Cadastro')}
                />
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
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    txt1: {
        fontSize: 20,
        padding: 20,
        marginLeft: 40,
    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: 18,
    },
    txtinput: {
        borderWidth: 2,
        borderColor: 'cyan',
        borderRadius: 10,
        padding: 7,
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'center',
        marginTop: 20,
    },
    registerButtonContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    registerText: {
        fontSize: 16,
        marginBottom: 10,
    }
});
