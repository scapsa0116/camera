import { View, Text, Pressable, StyleSheet, FlatList, Image} from "react-native"
import { Link } from "expo-router"
import {MaterialIcons} from '@expo/vector-icons'
import { useEffect, useState } from "react"
import * as FileSystem from 'expo-file-system';

type Media ={
    name: string,
    uri: string

}
export default function HomeScreen () {
   const [images, setImages ] = useState<Media[]>([])


    useEffect(()=>{
       loadFiles()
    },[])

    const loadFiles= async () => {
        if(!FileSystem.documentDirectory){
            return;
        }
        
        const res = await FileSystem.readDirectoryAsync(
            FileSystem.documentDirectory
        )

        setImages(res.map((file) => ({
            name:file,
            uri: FileSystem.documentDirectory + file,
        }))
      )
    }


    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <FlatList data = {images} renderItem = {({item}) => (
                <Image source = {{uri: item.uri}} style = {{width: 100, height: 100}}/>
            )}/>
           




      <Link href="/camera" asChild>
        <Pressable style={styles.floatingButton}>
          <MaterialIcons name="photo-camera" size={30} color="white"  />
        </Pressable>
      </Link>

      <Text style={{ fontSize: 24, fontWeight: "600", marginTop: 16 }}>
        Home Screen
      </Text>


            <Link href = "/image 1">Image 1</Link>
            <Link href = "/image 2">Image 2</Link>
            <Link href = "/image 3">Image 3</Link>
    </View>
    )

}

const styles = StyleSheet.create({

floatingButton: {
backgroundColor: 'royalblue', 
padding: 15, 
borderRadius: 50, 
position: 'absolute',
bottom: 30, 
right: 30
}

})