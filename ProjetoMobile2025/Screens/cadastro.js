import { View, Text, StyleSheet, ImageBackground, Button, TextInput } from "react-native";
import { useState } from "react";
import { auth } from '../controller.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Cadastro({navigation}) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const realizarCadastro = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Cadastro realizado com sucesso
            console.log("Usuário cadastrado com sucesso!");
            navigation.navigate('Home');
        })
        .catch((error) => {
            console.log("Erro ao cadastrar: ", error.message);
        });
    }

    return(
        <View style={styles.ImageBackground}>
            <ImageBackground source={require('../assets/backgroundhome.png')} resizeMode="cover" style={styles.backgroundImage}>
            </ImageBackground>
            <Text style={styles.txt1}>Cadastro de Novo Usuário</Text>
            <View style={styles.row}>
                <TextInput
                style={styles.txtinput}
                placeholder="E-mail"
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
                    title="Cadastrar"
                    color={'green'}
                    onPress={realizarCadastro}
                />
            </View>
            <View style={styles.loginButtonContainer}>
                <Text style={styles.loginText}>Já tem uma conta?</Text>
                <Button
                    title="Voltar para Login"
                    color={'blue'}
                    onPress={() => navigation.navigate('TelaLogin')}
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
    loginButtonContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    loginText: {
        fontSize: 16,
        marginBottom: 10,
    }
});
