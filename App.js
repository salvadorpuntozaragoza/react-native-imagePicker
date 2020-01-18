import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import { db } from './firebase'
import selectImage from './ImageLoader'

export default App = () => {

  const [src, setSrc] = useState({ uri: 'image' })
  const [fb, setFb] = useState({ uri: 'image' })

  const loadImage = () => {
    try{
      db.collection('Pruebas').add(src)
    } catch(Error){
      console.log(Error)
    }
  }

  const ImagePicker = () => {
    const img = selectImage()
    setSrc(img)
  }

  const getData = () => {
    db.collection('Pruebas').get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

  const logSource = () => {
    console.log(src)
  }

  return (
    <View style = { styles.container } >
      <Image 
        style = {{ height: '50%', width: '50%' }}
        source = { src }
      />
      <Text> Hello </Text>
      <Button 
        title = 'Load image'
        onPress = { selectImage }
      />
      <Button 
        title = 'Print source'
        onPress = { logSource }
      />
      <Button 
        title = 'Upload image'
        onPress = { loadImage }
      />
      <Button 
        title = 'Get image'
        onPress = { getData }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})