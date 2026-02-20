import { View, Text } from "react-native"
import { Link } from "expo-router"
import { useLocalSearchParams } from "expo-router"

export default function ImageScreen () {
    const {name} = useLocalSearchParams<{name: string}>()


    return(
        <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{fontSize: 24, fontWeight: 600}}>Image {name}</Text>
            <Link href = "/">Home</Link>
        </View>
    )

}