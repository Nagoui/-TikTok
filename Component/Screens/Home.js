// import React, { COmponent } from 'react';
// import {
//   View,
//   StatusBar,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   Dimensions,
//   StyleSheet,
//   Image,
//   ImageBackground,
// } from 'react-native';

// import Video from 'react-native-video';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

// const { width, height } = Dimensions.get('window');

// export default class Home extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.disableYelloBox = true;
//     return (
//       <View>
//         <Video source={this.props.item.video} repeat style={styles.video}/>
//         <View styole={styles.mainContainer}>
//           <View style={styles.innerLeft}> 
//             <View style={styles.dataContainer}>
//               <Text style={styles.title}>@{this.props.item.title}</Text>
//               <Text style={styles.description} numberOfLines={4}>
//                 {this.props.item.description}
//               </Text>
//               <Text style={{color:'#fff',fontWeight:'bold',marginBottom:15}}>
//                 #AppBlog #ReactNative
//               </Text>
//               <View style={styles.music}>
//                 <Icon  
//                   name='md-nusical-note'
//                   size={18}
//                   color="#fff"
//                   style={{maginRight:10}}
//                 />
//                 <Text style={{color:'#fff'}}>App TikTok  React Native</Text>
//               </View>
//             </View>
//           </View>

//           <View styl={styles.innerRight}>
//             <ImageBackground  
//               source={this.props.item.img}
//               style={styles.profile}
//               borderRadius={25}
//               borderWeight={1}
//               borderColor="#fff"
//             >
//               <TouchableOpacity style={styles.btn}>
//                 <Icon name='ios-add' color='fff' size={15} />
//               </TouchableOpacity>
//             </ImageBackground>

//             <Icon naem='heart' size={45} color='#e5e5e5'/>
//             <Text syle={{color:'#fff' ,marginBottom:25}}>1234</Text>
//           </View>

//         </View>
//       </View>
//     )
//   }
// }

import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');

class VideoData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <View>
        <Video source={this.props.item.video} repeat playWhenInactive={false} textTracks={this.props.item.video} style={styles.video} resizeMode="cover" />
 <StatusBar barStyle="light-content"  backgroundColor="#000"/>

        <View style={styles.mainContainer}>
          <View style={styles.innerLeft}>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>@{this.props.item.title}</Text>
              <Text style={styles.description} numberOfLines={4}>
                {this.props.item.description}
              </Text>
              <Text
                style={{color: '#fff', fontWeight: 'bold', marginBottom: 15}}>
                #AppDevBlog #ReactNative
              </Text>
              <View style={styles.music}>
                <Icon
                  name="md-musical-note"
                  size={18}
                  color="#fff"
                  style={{marginRight: 10}}
                />
                <Text style={{color: '#fff'}}>AppDevBlog - React Native</Text>
              </View>
            </View>
          </View>

          <View style={styles.innerRight}>
            <ImageBackground
              source={this.props.item.img}
              style={styles.profile}
              borderRadius={25}
              borderWidth={1}
              borderColor="#fff">
              <TouchableOpacity style={styles.btn}>
                <Icon name="ios-add" color="#fff" size={15} />
              </TouchableOpacity>
            </ImageBackground>

            <Icon name="ios-heart" size={45} color="#ee251b" />
            <Text style={{color: '#fff', marginBottom: 25}}>12345</Text>

            <Icon2 name="comment" size={45} color="#e5e5e5" />
            <Text style={{color: '#fff', marginBottom: 25}}>1234</Text>

            <Icon
              name="logo-whatsapp"
              size={45}
              color="#4fce5d"
              style={{marginBottom: 35}}
            />

            <ImageBackground
              source={require('../../assets/Test.jpg')}
              style={styles.profile}
              borderRadius={25}
              borderWidth={1}
              borderColor="#fff"
            />
          </View>
        </View>
      </View>
    );
  }
}

class Home extends Component {
  state = {};
  render() {
    let data = [
      {
        id:7,
        title: 'aAppDevBlog',
        video: require('../../assets/Sample.mp4'),
        img: require('../../assets/Test.jpg'),
        // img: require('../Assets/p1.jpg'),
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
      },
      {
        id:1,
        title: 'bAppDevBlog',
        video: require('../../assets/Sample5.mp4'),
        // video: require('../Assets/sample.mp4'),
        img: require('../../assets/Test1.jpg'),
        // img: require('../Assets/p1.jpg'),
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
      },
      {
        id:2,
        title: 'cAppDevBlog',
        video: require('../../assets/Sample2.mp4'),
        // video: require('../Assets/sample.mp4'),
        img: require('../../assets/Test2.jpg'),
        // img: require('../Assets/p1.jpg'),
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
      },
      {
        id:3,
        title: 'dAppDevBlog',
        video: require('../../assets/Sample3.mp4'),
        // video: require('../Assets/sample.mp4'),
        img: require('../../assets/Test3.jpg'),
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
      },
      {
        id:4,
        title: 'eAppDevBlog',
        video: require('../../assets/Sample4.mp4'),
        // video: require('../Assets/sample.mp4'),
        img: require('../../assets/Test4.jpg'),
        description:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
      },
    ];

    return (
      <View style={{height: height}}>
        <FlatList
          data={data}
          pagingEnabled={true}
          renderItem={({item, index}) => {
            return <VideoData item={item} />;
          }}
          keyExtractor={(item,index)=>index.toString()}
        />
        <View style={styles.header}>
          <Text style={styles.text}>Following</Text>
          <Icon
            name="md-more"
            color="gray"
            size={15}
            style={{marginRight: 15}}
          />
          <Text style={[styles.text, {color: 'gray'}]}>For You</Text>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  video: {
    height: height,
    width: width,
    backgroundColor: '#000',
  },
  header: {
    width: width,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 17,
    marginRight: 15,
  },
  mainContainer: {
    height: '55%',
    flexDirection: 'row',
    width: width,
    position: 'absolute',
    bottom: 60,
  },
  innerLeft: {
    width: '80%',
    height: '100%',
  },
  innerRight: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    bottom:50
  },
  profile: {
    height: 50,
    width: 50,
    alignItems: 'center',
    marginBottom: 25,
    // bottom:100
  },
  btn: {
    backgroundColor: '#ff5b77',
    width: 20,
    height: 20,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -10,
  },
  dataContainer: {
    height: '45%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    color: '#e5e5e5',
  },
  music: {
    flexDirection: 'row',
    alignItems: 'center',
    // botti
  },
});