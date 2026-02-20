import { View, Text } from "react-native"
import { Link } from "expo-router"

export default function ImageScreen () {


    return(
        <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{fontSize: 24, fontWeight: 600}}>Image Screen</Text>
            <Link href = "/">Home</Link>
        </View>
    )

}