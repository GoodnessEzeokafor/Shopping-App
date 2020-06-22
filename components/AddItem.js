import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput}  from 'react-native';
// import Icon from "react-native-vector-icons/"
import { Ionicons } from '@expo/vector-icons';

const AddItem = (props) => {
    const [text, setText] = useState('');
    
    const onChange = textValue => setText(textValue)
  return(
    <View>
            <TextInput  
                    placeholder="Add Event..." 
                    style={styles.input} 
                    onChangeText={onChange}
                    />
            <TouchableOpacity 
                style={styles.btn}
                onPress ={() => props.addItem(text)}
            >
                    <Text style={styles.btnText}>
                    <Ionicons name="ios-add" size={20}  />
                    Add Event
                    </Text>

            </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16
    },
    btn:{
        backgroundColor:"#c2bad8",
        padding:9,
        margin:5
    },
    btnText:{
        color:"darkslateblue",
        fontSize:20,
        textAlign:"center"
    }
})


export default AddItem;