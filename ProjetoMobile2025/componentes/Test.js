import { View, Text, Image, StyleSheet, Button, TextInput } from "react-native";

export default function Test() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem vindo ao ARK!</Text>
            <View style={styles.viewimg}>
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtyUvtbWxpQGLR4V29lc7nBv7h1ASEVEYiQ&s' }} />
            </View>

            <Text style={styles.txt}>Tyrannosaurus Rex</Text>

            <View style={styles.row}>
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgoVRcaO8ilimT9GxKo6f70961190OB3_9vw&s' }} />
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCCWZdGX7fbO2FudW-Z5UXmpA-Uf--l3i8g&s' }} />
            </View>
            <Text style={styles.titulo}>Ankylo e Doedicurus</Text>
            
            <TextInput
            style={styles.txtinput}
            placeholder="Nome" //placeholder: aparece ao fundo da caixa de mensagem
            placeholderTextColor={'black'}
            />

            <TextInput
            style={styles.txtinput}
            placeholder="Mensagem"
            placeholderTextColor={'black'}
            />

            <Button
                title="Enviar" //Texto escrito no botão
                color={'blue'} //Cor do botão
                onPress={() => console.log('Button has been pressed')} //ao pressionar executar uma função
                //disabled deixa o botao inativo
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange', //Muda a cor do fundo para laranja
        padding: 20, //Adiciona uma pequena borda
        justifyContent: 'space-evenly'
    },
    titulo: {
        fontSize: 20,
    },
    img: {
        width: 150,
        height: 150,
    },
    viewimg: {
        alignItems: 'flex-end',
    },
    txt: {
        fontSize: 20,
        alignSelf: 'flex-end',
        width: 180,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtinput: {
        borderWidth: 2,
        borderColor: 'cyan',
        borderRadius: 10,
        padding: 7,
    }
});
