import React,{COmponent} from 'react';
import {
  View,
  StatusBar,

} from 'react-native';

import   Tabs from './src/Component/router.js';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

render(){
  console.disableYelloBox=true;
  return(
    // <View>
    //  {/* <StatusBar barStyle="light-content"  backgroundColor="#000"/> */}
     <Tabs/>
    // </View>
  )
}
}