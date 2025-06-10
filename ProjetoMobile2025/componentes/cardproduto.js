import { View, Text, StyleSheet, FlatList, ImageBackground, Image, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function CardProduto({id, nome, valor, imagem, comprar}) {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.card}>
                    <Image style={styles.img} source={{uri: imagem}}></Image>
                    <Text style={styles.txt2}>{id}</Text>
                    <Text style={styles.txt2}>{nome} - R$: {valor.toFixed(2)}</Text>
                    <Button title="Comprar" onPress={comprar} style={styles.btn} />
                </View>
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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
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
});
