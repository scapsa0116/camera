import { View, Text, ActivityIndicator, StyleSheet, Pressable, Image,Button,SafeAreaView} from "react-native"
import { Link, router, Stack } from "expo-router"
import { useCameraPermissions, CameraView, CameraType, CameraCapturedPicture } from "expo-camera"
import { useEffect, useState, useRef} from "react"
import { MaterialIcons } from '@expo/vector-icons'
import { documentDirectory } from "expo-file-system"
import * as FileSystem from 'expo-file-system';
import path from "path"

export default function CameraScreen () {
const [permission, requestPermission] = useCameraPermissions()
const [facing, setFacing] = useState<CameraType>('back')
const camera = useRef<CameraView>(null)
const [picture, setPicture] = useState<CameraCapturedPicture>()


useEffect (()=>{
if (permission && !permission.granted && permission.canAskAgain){
    requestPermission()
}
},[permission])

if (!permission?.granted){
    return <ActivityIndicator/>
}

const toggleCameraFacing = () => {
    setFacing ((current) => (current === 'back' ? 'front' : 'back'))
}

const takePicture = async ()=>{
    const res = await camera.current?.takePictureAsync()
    setPicture(res)
}



if (picture) {
    <View style ={{flex:1 }}>
        <Image source={{uri: picture.uri}}
        style = {{width:'100%', flex:1 }}
        />
        <MaterialIcons
    onPress={() => {
      setPicture(undefined);
    }}
    name="close"
    size={35}
    color="white"
    style={{ position: 'absolute', top: 50, left: 20 }}
  />
    </View>
}

const saveFile = async (uri: string) => {
  const filename = path.parse(uri).base;
  
  await FileSystem.copyAsync({
    from: uri,
    to: FileSystem.documentDirectory + filename,
  });
  setPicture(undefined);

  router.push('/');
};

    return(
        <View>
           
            <CameraView ref={camera} style ={styles.camera} facing={facing}>
        <View style = {styles.footer}>
                <View/>
                <Pressable style ={styles.recordButton} onPress = {takePicture}/>
               <MaterialIcons name="flip-camera-ios" color={'white'} size={24} onPress={toggleCameraFacing}/>
        </View>

        <View style={{ padding: 10 }}>
             <SafeAreaView edges={['bottom']}>
             <Button title="Save" onPress={() => saveFile(picture.uri)}/>
            </SafeAreaView>
        </View>

            <Link href = "/">Home</Link>
            <MaterialIcons 
            name = 'close' 
            color={'black'} 
            style = {styles.close} 
            size={30} 
            onPress={()=> router.back()}/>
            </CameraView>
        </View>
    )

}

const styles = StyleSheet.create({
    
    camera: {
    width: '100%', 
    height:'100%'
    },

    close:{
        position: 'absolute',
        top: 50,
        left:20,
    },

    footer:{
        marginTop: 'auto',
        padding: 20,
        paddingBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '00000099'

    },
    recordButton:{
        width: 50,
        height: 50,
        borderRadius:50,
        backgroundColor:'white'
    }

}


)