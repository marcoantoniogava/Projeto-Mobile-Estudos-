import { View, Text, StyleSheet, FlatList, ImageBackground, Image, ScrollView, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useCarrinho } from '../CarrinhoProvider';

export default function Carrinho() {
    const { carrinho } = useCarrinho()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.container}>
                        <ImageBackground
                            source={require('../assets/backgroundhome.png')}
                            resizeMode="cover"
                            style={styles.backgroundImage}>
                            <Text style={styles.txt1}>Carrinho</Text>
                            <FlatList
                                data={carrinho}
                                renderItem={({ item }) => (
                                    <View style={styles.card}>
                                        <Image style={styles.img} source={{ uri: item.imagem }} />
                                        <Text style={styles.txt2}>{item.nome}</Text>
                                        <Text style={styles.txt2}>R$: {item.valor}</Text>
                                    </View>
                                )}
                                contentContainerStyle={styles.flatListContent}
                            />
                            <View style={styles.registerButtonContainer}>
                                <Text style={styles.registerText}>Deseja Cadastrar um Produto?</Text>
                                <Button
                                    title="Ir Para Cadastro de Produtos"
                                    color={'blue'}
                                    onPress={() => navigation.navigate('CadastroProduto')}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    flatListContent: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    txt1: {
        fontSize: 40,
        fontFamily: 'Arial',
        color: '#7FFFD4',
        marginVertical: 20,
    },
    txt2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 2,
    },
    card: {
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 5,
    },
    registerButtonContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    registerText: {
        fontSize: 16,
        marginBottom: 10,
    },
});



