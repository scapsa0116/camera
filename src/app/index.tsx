import { View, Text, Pressable, StyleSheet, FlatList, Image,} from "react-native"
import { Link, useFocusEffect } from "expo-router"
import {MaterialIcons} from '@expo/vector-icons'
import { useEffect, useState, useCallback} from "react"
import * as FileSystem from 'expo-file-system/legacy';
const { documentDirectory } = FileSystem;

type Media ={
    name: string,
    uri: string

}
export default function HomeScreen () {
   const [images, setImages ] = useState<Media[]>([])


   useFocusEffect(
    useCallback(() => {
      loadFiles();
    }, [])
  );


    useEffect(()=>{
       loadFiles()
    },[])

    const loadFiles= async () => {
        if(!FileSystem.documentDirectory)
            return;
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
                <Link href={`/${item.name}`} asChild>
                <Pressable 
                style = {{flex: 1, maxWidth: '33.33%'}}
                contentContainerStyle={{ gap: 1 }}
                columnWrapperStyle={{ gap: 1 }}>
                <Image source = {{uri: item.uri}} style = {{aspectRatio: 3 / 4, borderRadius: 5}}/>
                </Pressable>
                </Link>
            )}/>
      <Link href="/camera" asChild>
        <Pressable style={styles.floatingButton}>
          <MaterialIcons name="photo-camera" size={30} color="white"  />
        </Pressable>
      </Link>

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