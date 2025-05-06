import { View, Text, StyleSheet, FlatList, ImageBackground, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import CardProduto from '../componentes/cardproduto';

export default function Produto() {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: 'Macarrão', valor: 2.00, imagem: 'https://forbes.com.br/wp-content/uploads/2022/01/macarrao_coluna_Carla_Bolla_22jan21_IvanSavini_Guettymages.jpg' },
        { id: 2, nome: 'Banana', valor: 10.00, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlL6yoi89pGz-08CupN6qSa8NYH1CV5qxvA&s' },
        { id: 3, nome: 'Abacaxi', valor: 5.00, imagem: 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/GEUVV5EDH5FUVEQJ6YYTV3JERA.jpeg' },
        { id: 4, nome: 'Pão', valor: 1.00, imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2018/10/paofrancesfolhado.jpg' },
        { id: 5, nome: 'Café', valor: 3.00, imagem: 'https://baggiocafe.com.br/cdn/shop/articles/Tipos_de_graos_de_cafe_1.jpg?crop=center&height=1200&v=1708516699&width=1200' },
        { id: 6, nome: 'Cerveja', valor: 8.00, imagem: 'https://media.istockphoto.com/id/519728153/pt/foto/caneca-de-cerveja.jpg?s=612x612&w=0&k=20&c=IGLA7eoqkl07gR74Jt3kZ7TDlUq1GTkg_9ys8ZU-vro=' },
        { id: 7, nome: 'Refrigerante', valor: 5.00, imagem: 'https://fortatacadista.vteximg.com.br/arquivos/ids/299392-1000-1000/2301822_7894900027013_BEB-REFRIG.COCA-COLA-2L-PET..jpg?v=637764859239570000' },
        { id: 8, nome: 'Pão de queijo', valor: 4.00, imagem: 'https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita.jpg' },
        { id: 9, nome: 'Bolo', valor: 6.00, imagem: 'https://d1uz88p17r663j.cloudfront.net/original/8fee36bf950557ff9f896b9104f36907_bolo-vulcao-brigadeiro-receitas-nestle.jpg' },
        { id: 10, nome: 'Coxinha', valor: 7.00, imagem: 'https://panattos.com.br/uploads/produtos/2017/03/coxinha-de-frango-com-requeijao-mini-congelada.jpg' },
    ]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.container}>
                        <ImageBackground
                            source={require('../assets/backgroundhome.png')}
                            resizeMode="cover"
                            style={styles.backgroundImage}>
                            <Text style={styles.txt1}>Produtos</Text>

                            <FlatList
                                data={produtos}
                                renderItem={({ item }) => (
                                    <CardProduto
                                    id = {item.id}
                                    nome = {item.nome}
                                    valor = {item.valor}
                                    imagem = {item.imagem}
                                    />
                                )}
                                keyExtractor={(item) => item.id.toString()}
                                contentContainerStyle={styles.flatListContent}
                            />
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
});



