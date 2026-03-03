import { View, Text } from "react-native"
import { Link } from "expo-router"
import { useLocalSearchParams } from "expo-router"
import * as FileSystem from 'expo-file-system';


export default function ImageScreen () {
    const {name} = useLocalSearchParams<{name: string}>()
    const fullUri = (FileSystem.documentDirectory || '') + (name || '');


    return(
        <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{fontSize: 24, fontWeight: 600}}>Image {name}</Text>
            <Link href = "/">Home</Link>
        </View>
    )}
