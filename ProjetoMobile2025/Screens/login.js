import { View, Text, StyleSheet, ImageBackground, Button, TextInput } from "react-native";


export default function Login({navigation}) {
   
    return(
        <View style={styles.ImageBackground}>
            <ImageBackground source={require('../assets/backgroundhome.png')} resizeMode="cover">
            </ImageBackground>
            <Text style={styles.txt1}>Olá, seja bem vindo ao Login!</Text>
            <View style={styles.row}>
            <TextInput
            style={styles.txtinput}
            placeholder="Usuário"
            placeholderTextColor={'black'}
            />
            <TextInput
            style={styles.txtinput}
            placeholder="Senha"
            placeholderTextColor={'black'}
            secureTextEntry={true}
            />
            </View>
            <View>
            <Button
                title="Login"
                color={'blue'}
                onPress={() => navigation.navigate("Home")}
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
    txt1: {
        fontSize: 20,
        padding: 20,
        marginLeft : 40,
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
    }
});
