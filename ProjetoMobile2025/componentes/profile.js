import { View, Text, StyleSheet, Button, Image } from "react-native";

 export default function Profile() {
  return(
      <View style={styles.containerProfile}>
          <Text>Olá Mundo!</Text>
          <Button title="Clique" onPress={() => alert('Botão pressionado!')} />
          <Image style={{width: 200, height: 200}} source={require('../assets/ark.jpg')}/>
          <Image style={{width: 200, height: 200}} source={{uri:'https://images.squarespace-cdn.com/content/v1/5c95f8d416b640656eb7765a/1655068069632-6RZK8275DNYCP8P4QFHE/ark-2.jpg?format=2500w'}} />
      </View>
  )
}

export function Artist() {
  return(
      <View style={styles.containerArtist}>
          <Text>Esses são os artistas!</Text>
      </View>
  )
}

  export function Gallery() {
    return(
        <View style={styles.containerGallery}>
            <Text>Essa é minha galeria!</Text>
        </View>
    )
  }

  const styles = StyleSheet.create({
    containerProfile: {
      flex: 4,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerArtist:{
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerGallery:{
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });
