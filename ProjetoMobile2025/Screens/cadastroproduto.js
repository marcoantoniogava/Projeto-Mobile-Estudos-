import { View, Text, StyleSheet, ImageBackground, Button, TextInput } from "react-native";
import { useState } from "react";
import { db } from "../controller";
import { collection, addDoc } from "firebase/firestore";

export default function Cadproduto({navigation}) {
    
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    const cadastrarProduto = async () => {
        try {
            await addDoc(collection(db, "produtos"), {
                nome,
                valor: parseFloat(valor),
                imagem
            })
            setNome();
            setValor();
            setImagem();
        }
        catch {
            console.log("Erro ao cadastrar produto: ", error)
        }
    }

    return(
        <View style={styles.ImageBackground}>
            <ImageBackground source={require('../assets/backgroundhome.png')} resizeMode="cover" style={styles.backgroundImage}>
            </ImageBackground>
            <Text style={styles.txt1}>Cadastro de Produtos</Text>
            <View style={styles.row}>
                <TextInput
                style={styles.txtinput}
                placeholder="Nome"
                placeholderTextColor={'black'}
                value={nome}
                onChangeText={setNome}
                />
                <TextInput
                style={styles.txtinput}
                placeholder="Valor"
                placeholderTextColor={'black'}
                value={valor}
                onChangeText={setValor}
                />
                <TextInput
                style={styles.txtinput}
                placeholder="Imagem"
                placeholderTextColor={'black'}
                value={imagem}
                onChangeText={setImagem}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Cadastrar"
                    color={'green'}
                    onPress={cadastrarProduto}
                />
            </View>
            <View style={styles.loginButtonContainer}>
                <Text style={styles.loginText}>Deseja Fazer o Cadastro de um Usuário?</Text>
                <Button
                    title="Ir Para Cadastro de Usuários"
                    color={'blue'}
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
