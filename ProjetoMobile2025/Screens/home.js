import { View, Text, Button, ImageBackground, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.ImageBackground}>
            <ImageBackground source={require('../assets/backgroundhome.png')} resizeMode="cover">
            </ImageBackground>
            <Text style={styles.txt1}>Olá, seja bem vindo ao app!</Text>
            <View style={styles.row}>
            <Image source={require('../assets/logocanva.jpg')} style={styles.img} />
            <Image source={require('../assets/photoshop.png')} style={styles.img} />
            </View>
            <View style={styles.row}>
            <Text style={styles.txt2}>Esse é o canva, onde você pode criar seus projetos!</Text>
            <Text style={styles.txt2}>E aqui está o photoshop, onde você pode editar suas imagens!</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Button 
                        title="Ir para o Feed" 
                        onPress={() => navigation.navigate("FeedTab")}
                        color="#6200ee"
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
    img: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    txt1: {
        fontSize: 20,
        padding: 20,
        marginLeft : 40,
    },
    txt2: {
        fontSize: 15,
        width: 150,
    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding: 18,
    },
    buttonContainer: {
        marginTop: 20,
        paddingHorizontal: 50,
        alignSelf: 'center',
    },
});
