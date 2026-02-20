import { View, Text, ActivityIndicator,} from "react-native"
import { Link } from "expo-router"
import { useCameraPermissions, CameraView } from "expo-camera"
import { useEffect } from "react"

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
        <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <CameraView style ={{width: '100%', height:'100%'}}></CameraView>
            <Link href = "/">Home</Link>
        </View>
    )

}