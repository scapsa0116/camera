import { View, Text, Pressable, StyleSheet} from "react-native"
import { Link } from "expo-router"
import {MaterialIcons} from '@expo/vector-icons'

export default function HomeScreen () {


    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
           




      <Link href="/camera" asChild>
        <Pressable style={styles.floatingButton}>
          <MaterialIcons name="photo-camera" size={30} color="white"  />
        </Pressable>
      </Link>

      <Text style={{ fontSize: 24, fontWeight: "600", marginTop: 16 }}>
        Home Screen
      </Text>


            <Link href = "/image">Image 1</Link>
            <Link href = "/image">Image 2</Link>
            <Link href = "/image">Image 3</Link>
    </View>
    )

}

const styles = StyleSheet.create({

floatingButton: {
backgroundColor: 'royalblue', 
padding: 15, 
borderRadius: 50, 
position: 'absolute',
bottom: 10, 
right: 10
}

})