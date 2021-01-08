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
  console.disableYelloBox=true;
  return(
    <View>
<Text>hi</Text>
    </View>
  )
}
}