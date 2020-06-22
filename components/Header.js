import React from 'react'
import {View, Text, StyleSheet}  from 'react-native';

const Header = (props) => {
  return(
    <View
    style={styles.header}
    >
      {/* <View style={{backgroundColor:"blue", flex:0.3}} />
      <View style={{backgroundColor:"red", flex:0.5}} />
      <Text>Hello World</Text> */}
        <Text style={styles.text}>{props.title}</Text>
       
    </View>
  )
}


const styles = StyleSheet.create({
  header:{
    height:60,
    padding:15,
    backgroundColor:'darkslateblue',

  },
  text:{
    color:"#fff", 
    fontSize:23,
    textAlign:'center'
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

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:'center'
//     // flexDirection:"row",
//     // height:100,
//     // padding:20
//   },
//   text1:{
//     color:"darkslateblue", fontSize:30
//   },
//   text2:{
//     color:"grey", fontSize:20
//   },
//   img:{
//       width:100,
//       height:100,
//       borderRadius:100/2
//   }
// })
export default Header;