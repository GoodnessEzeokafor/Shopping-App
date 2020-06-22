import React , {useState}from 'react'
import {View, Text, StyleSheet, FlatList}  from 'react-native';
import Header from "./components/Header"
import ListItem from "./components/ListItem"
import AddItem from "./components/AddItem"

// import {uuid} from "uuidv4"
const App = () => {
  var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
  // console.log(RandomNumber)
  const [items, setItems] = useState([
    {id:Math.floor(Math.random() * 100) + 1, text:"Maturity School"},
    {id:Math.floor(Math.random() * 100) + 1, text:"Pst Karis.E Birthday"},
    {id:Math.floor(Math.random() * 100) + 1, text:"Media Outreach"},
    {id:Math.floor(Math.random() * 100) + 1, text:"TOP CONCERT"},
  ])
  const deleteItems = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem  = (text) => {
    setItem(prevItems => {
      return[{id:Math.floor(Math.random() * 100) + 1, text}, ...prevItems]
    })
  }
  return(
    <View
    style={styles.container}
    >
      <Header title = "Embassy Of Heaven"/>
      {/* <View style={{backgroundColor:"blue", flex:0.3}} />
      <View style={{backgroundColor:"red", flex:0.5}} />
      <Text>Hello World</Text> */}
        {/* <Text style={styles.text1}>Hello World</Text>
         */}
         <AddItem 
          addItem={addItem}
         />
         <FlatList 
          data={items}
          renderItem={({item}) =>(
          // 
          <ListItem 
              item={item}
              deleteItems={deleteItems}  
            />
          )}
         />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30
    // justifyContent:"center",
    // alignItems:'center'
    // flexDirection:"row",
    // height:100,
    // padding:20
  },
  text1:{
    color:"darkslateblue", fontSize:30
  },
  text2:{
    color:"grey", fontSize:20
  },
  img:{
      width:100,
      height:100,
      borderRadius:100/2
  }
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
export default App;