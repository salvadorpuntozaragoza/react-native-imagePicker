import ImagePicker from 'react-native-image-picker'
import { useState } from 'react';

const selectImage = () => {

  const [src, setSrc] = useState({ uri: 'image' })
  ImagePicker.launchImageLibrary(options, (response) => {
    //console.log('Response = ', response);


    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      //console.log('File name: ' , response.fileName)
      //const source = { uri: response.uri };
      // setSrc(source)
      // You can also display the image using data:
      const source = { uri: 'data:image/jpeg;base64,' + response.data };
      setSrc(source)
      // this.setState({
      //  filePath: response,
      //  fileData: response.data,
      //  fileUri: response.uri
      // });

      return src
    }
  });
}

export default selectImage