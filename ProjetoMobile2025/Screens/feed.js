import { View, Text, Button, ImageBackground, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Feed() {
    const navigation = useNavigation();
    return (
        <View style={styles.ImageBackground}>
            <ImageBackground source={require('../assets/backgroundhome.png')} resizeMode="cover">
            </ImageBackground>
            <Text style={styles.txt1}>Esse é o Feed!</Text>
            <View style={styles.row}>
            <Image source={require('../assets/pinterest.jpg')} style={styles.img} />
            </View>
            <View style={styles.row}>
            <Text style={styles.txt2}>Esse é o pinterest, onde você pode encntrar fotos para usar!</Text>
            </View>
            <View style={styles.buttonContainer}>
                    <Button 
                        title="Ir para Home" 
                        onPress={() => navigation.navigate("HomeTab")}
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
