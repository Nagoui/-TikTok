import React,{COmponent} from 'react';
import {
  View,
  StatusBar,
    Text,
} from 'react-native';

// import   Tabs from './src/Component/router.js';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

render(){
  // console.disableYelloBox=true;
  return(
    <View style={{backgroundColor:'black',flex:1}}>
<Text>hi</Text>
    </View>
  )
}
}