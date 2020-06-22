import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity}  from 'react-native';
// import Icon from "react-native-vector-icons/"
import { Ionicons } from '@expo/vector-icons';

const ListItem = (props) => {
  return(
    <TouchableOpacity
        style={styles.listItem}
        key={props.item.id}
    >
        <View style={styles.listeItemView}>
            <Text style={styles.listeItemText}>{props.item.text}</Text>
            <Ionicons 
                name="md-remove-circle-outline" 
                size={24} 
                color="firebrick" 
                onPress={() => props.deleteItems(props.item.id)}
                />
        </View>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor:"#f8f8f8",
        borderBottomWidth:1,
        borderColor:"#eee"
    },
    listeItemView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
  listeItemText:{

  },
//   text2:{
//     color:"grey", fontSize:20
//   },
//   img:{
//       width:100,
//       height:100,
//       borderRadius:100/2
//   }
})


export default ListItem;