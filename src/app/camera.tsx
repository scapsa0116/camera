import { View, Text, ActivityIndicator, StyleSheet} from "react-native"
import { Link, router, Stack } from "expo-router"
import { useCameraPermissions, CameraView, } from "expo-camera"
import { useEffect } from "react"
import { MaterialIcons } from '@expo/vector-icons'


export default function CameraScreen () {
const [permission, requestPermission] = useCameraPermissions()
useEffect (()=>{
if (permission && !permission.granted && permission.canAskAgain){
    requestPermission()
}
},[permission])

if (!permission?.granted){
    return <ActivityIndicator/>
}

    return(
        <View>
           
            <CameraView style ={styles.camera}></CameraView>
            <Link href = "/">Home</Link>
            <MaterialIcons 
            name = 'close' 
            color={'white'} 
            style = {styles.close} 
            size={30} 
            onPress={()=> router.back()}/>

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
    }

}


)