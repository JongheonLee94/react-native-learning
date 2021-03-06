// import React, {Component} from 'react';
// import {Image, StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.cardContainer}>
//           <View style={styles.cardImageContainer}>
//             <Image style={styles.cardImage} source={require('./user.jpg')}/>
//           </View>
//           <View>
//             <Text style={styles.cardTitle}>
//               Lee
//             </Text>
//           </View>
//           <View style={styles.cardSubtitleContainer}>
//             <Text style={styles.cardSubtitle}>
//               React Native beginner
//             </Text>
//           </View>
//           <View>
//             <Text style={styles.cardDescription}>
//               뭐가 문젤까?
//             </Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const profileCardColor = 'dodgerblue';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   cardContainer: {
//     alignItems: 'center',
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderRadius: 20,
//     backgroundColor: profileCardColor,
//     width: 300,
//     height: 400,

//     ...Platform.select({ //플랫폼에 따라 카드 컨테이너에 음영 넣기
//             ios: {
//               shadowColor: 'black',
//               shadowOffset: {
//                 height: 10
//               },
//               shadowOpacity: 1
//             },
//             android: {
//               elevation: 15
//             }
//           })

//   },
//   cardImageContainer: {
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderWidth: 3,
//     borderColor: 'black',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginTop: 30, 
//   },
//   cardImage: {
//     borderRadius:57, 
//     width: 114,
//     height: 114,
//   },
//   cardTitle: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginTop: 30,
//     textShadowColor: 'black', 
//     textShadowOffset: {  
//       height: 2,
//       width: 2
//     },
//     textShadowRadius: 3 
//   },
//   cardSubtitleContainer: {
//     borderColor: 'black',
//     borderWidth: 3,
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//   },
//   cardSubtitle: {
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   cardDescription: {
//     fontStyle: 'italic',
//     marginTop: 10,
//     marginRight: 40,
//     marginLeft: 40,
//     marginBottom: 10
//   }
// });






// //5.1 

// import React, { Component } from 'react';
// import { Image, StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.cardContainer}>
//           <View style={styles.cardImageContainer}>
//             <Image style={styles.cardImage} source={require('./user.png')}/>
//           </View>
//           <View>
//             <Text style={styles.cardTitle}>
//               John Doe
//             </Text>
//           </View>
//           <View style={styles.cardSubtitleContainer}>
//             <Text style={styles.cardSubtitle}>
//               React Native Developer
//             </Text>
//           </View>
//           <View>
//             <Text style={styles.cardDescription}>
//               John is a really great JavaScript developer. He
//               loves using JS to build React Native applications
//               for iOS and Android.
//             </Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const profileCardColor = 'dodgerblue';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   cardContainer: {
//     alignItems: 'center',
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderRadius: 20,
//     backgroundColor: profileCardColor,
//     width: 300,
//     height: 400,
//     ...Platform.select({ //플랫폼에 따라 카드 컨테이너에 음영 넣기
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: {
//           height: 10
//         },
//         shadowOpacity: 1
//       },
//       android: {
//         elevation: 15
//       }
//     })

//   },
//   cardImageContainer: {
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderWidth: 3,
//     borderColor: 'black',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginTop: 30,
//     paddingTop: 15,
//     ...Platform.select({ //원형 이미지에 음영 넣기
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: {
//           height: 10,
//         },
//         shadowOpacity: 1
//       },
//       android: {
//         borderWidth: 3,
//         borderColor: 'black',
//         elevation: 15
//       }
//     })

//   },
//   cardImage: {
//     width: 80,
//     height: 80
//   },
//   cardTitle: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginTop: 30,
//     textShadowColor: 'black', // 음영 색상 지정
//     textShadowOffset: {  //음영의 offset 지정 오른쪽 하단으로 음영
//       height: 2,
//       width: 2
//     },
//     textShadowRadius: 3 //음영의 반경 
//   },
//   cardSubtitleContainer: {
//     borderColor: 'black',
//     borderWidth: 3,
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//   },
//   cardSubtitle: {
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   cardDescription: {
//     fontStyle: 'italic',
//     marginTop: 10,
//     marginRight: 40,
//     marginLeft: 40,
//     marginBottom: 10
//   }
// });


//5.2

// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
        
//         {/* 기본 50 X 50 크기의 정사각형. 크기가 변경되지 않음 */}
//         <Example style={{}}>A,1</Example>
  
//         {/* 기본 50 X 50 크기의 정사각형의 크기를 0.5배만큼 축소함 */}
//         <Example style={{transform: [{scale: 0.5}]}}>B,0.5</Example>
  
//         {/* 기본 50 X 50 크기의 정사각형의 크기를 2배만큼 확대함 */}
//         <Example style={{transform: [{scale: 2}]}}>C,2</Example>
  
//         {/* 기본 50 X 50 크기의 정사각형의 크기를 X축 방향으로만 3배 확대 */}
//         <Example style={{transform: [{scaleX: 3}]}}>D,X3</Example>
  
//         {/* 기본 50 X 50 크기의 정사각형의 크기를 Y축 방향으로만 1.5배 확대 */}
//         <Example style={{transform: [{scaleY: 1.5}]}}>E,Y1.5</Example>
//       </View>
//     );
//   }
// }

// const Example = (props) => (
//   <View style={[styles.example,props.style]}>
//     <Text>
//       {props.children}
//     </Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 75,
//     alignItems: 'center',
//     flex: 1
//   },
//   example: {
//     width: 50,
//     height: 50,
//     borderWidth: 2,
//     margin: 15,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });


//5.3
// import React, { Component } from 'react';
// import PropTypes from 'prop-types'; //PropTypes를 이용해 ProfileCard 컴포넌트가 사용하는 속성을 지정함
// import update from 'immutability-helper'; //immutability helper의 update함수 - 특정 컴포넌트의 state를 갱신(update)함.
// import { Image, Platform, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

// const userImage = require('./user.jpg');

// //컴포넌트를 만들기 위한 데이터
// const data = [{
//   image: userImage,
//   name: 'Lee',
//   occupation: 'React Native beginner',
//   description: '뭐가 문젤까?',
//   showThumbnail: true
// }
// ];

// //ProfileCard 컴포넌트를 App 코드에서 분리함
// const ProfileCard = (props) => {
  
//   const { image, name, occupation, description, onPress, showThumbnail } = props;
//   let containerStyles = [styles.cardContainer];
  
//   //showThumbnail 값이 true면, ProfileCard 컴포넌트를 80%만큼(20% 크기로) 축소함
//   if (showThumbnail) {
//     containerStyles.push(styles.cardThumbnail);
//   }
  
//   return (
//     <TouchableHighlight onPress={onPress}>
//       <View style={[containerStyles]}>
//         <View style={styles.cardImageContainer}>
//           <Image style={styles.cardImage} source={image}/>
//         </View>
//         <View>
//           <Text style={styles.cardTitle}>
//             {name}
//           </Text>
//         </View>
//         <View style={styles.cardSubtitleContainer}>
//           <Text style={styles.cardSubtitle}>
//             {occupation}
//           </Text>
//         </View>
//         <View>
//           <Text style={styles.cardDescription}>
//             {description}
//           </Text>
//         </View>
//       </View>
//     </TouchableHighlight>
//   )
// };

// ProfileCard.propTypes = {
//   image: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   occupation: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   showThumbnail: PropTypes.bool.isRequired,
//   onPress: PropTypes.func.isRequired
// };

// export default class App extends Component {
  
//   constructor(props, context) {
//     super(props, context);
//     //Profile 컴포넌트의 상태는 상위 컴포넌트인 App에서 관리
//     this.state = {
//       data: data
//     }
//   }
  
//   //onPress이벤트를 처리하는 함수
//   handleProfileCardPress = (index) => {
    
//     const showThumbnail = !this.state.data[index].showThumbnail;
    
//     this.setState({
//       data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
//     });
//   };
  
//   render() {
//     //Profile컴포넌트의 리스트(배열) 처리
//     const list = this.state.data.map(function(item, index) {
//       const { image, name, occupation, description, showThumbnail } = item;
//       return <ProfileCard key={'card-' + index}
//                           image={image}
//                           name={name}
//                           occupation={occupation}
//                           description={description}
//                           onPress={this.handleProfileCardPress.bind(this, index)}
//                           showThumbnail={showThumbnail}/>
//     }, this);
    
//     return (
//       <View style={styles.container}>
//         {/*모든 Profiles를 출력 */}
//         {list}
//       </View>
//     );
//   }
// }

// const profileCardColor = 'dodgerblue';

// const styles = StyleSheet.create({

//   cardThumbnail: {
//     transform: [{scale: 0.2}]
//   },


//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   cardContainer: {
//     alignItems: 'center',
//     borderColor: 'black',
//     borderWidth: 3,
//     borderStyle: 'solid',
//     borderRadius: 20,
//     backgroundColor: profileCardColor,
//     width: 300,
//     height: 400,
//     ...Platform.select({ //플랫폼에 따라 카드 컨테이너에 음영 넣기
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: {
//           height: 10
//         },
//         shadowOpacity: 1
//       },
//       android: {
//         elevation: 15
//       }
//     })

//   },
//   cardImageContainer: {
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderWidth: 3,
//     borderColor: 'black',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginTop: 30,
//     ...Platform.select({ //원형 이미지에 음영 넣기
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: {
//           height: 10,
//         },
//         shadowOpacity: 1
//       },
//       android: {
//         borderWidth: 3,
//         borderColor: 'black',
//         elevation: 15
//       }
//     })

//   },
//   cardImage: {
//     borderRadius:57, 
//     width: 114,
//     height: 114,
//   },
//   cardTitle: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 24,
//     marginTop: 30,
//     textShadowColor: 'black', // 음영 색상 지정
//     textShadowOffset: {  //음영의 offset 지정 오른쪽 하단으로 음영
//       height: 2,
//       width: 2
//     },
//     textShadowRadius: 3 //음영의 반경 
//   },
//   cardSubtitleContainer: {
//     borderColor: 'black',
//     borderWidth: 3,
//     borderTopWidth: 0,
//     borderRightWidth: 0,
//     borderLeftWidth: 0,
//   },
//   cardSubtitle: {
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   cardDescription: {
//     fontStyle: 'italic',
//     marginTop: 10,
//     marginRight: 40,
//     marginLeft: 40,
//     marginBottom: 10
//   }
// });


//5.4
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
        
//         <Example style={{}}>A</Example>
//         <View style={[styles.box, {
//         transform: [{ skewX: "45deg" }]
//       }]}>
//         <Text style={styles.text}>SkewY by 45 deg</Text>
//       </View>

//         {/* X 축으로 45도 기울이기 */}
//         <Example style={{transform: [{skewX: '45deg'}]}}>B X45</Example>
        
//         {/* X축으로 -45도 기울이기*/}
//         <Example style={{transform: [{skewX: '-45deg'}]}}>C X-45</Example>
        
//         {/* Y축으로 45도 기울이기*/}
//         <Example style={{transform: [{skewY: '45deg'},{skewX: '-45deg'}]}}>D Y45</Example>
        
//         {/*Y축으로 -45도 기울이기 */}
//         <Example style={{transform: [{skewY: '-45deg'}]}}>E Y-45</Example>


//       </View>
//     );
//   }
// }

// const Example = (props) => (
//   <View style={[styles.example,props.style]}>
//     <Text>
//       {props.children}
//     </Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//     alignItems: 'center',
//     flex: 1
//   },
//   example: {
//     width: 75,
//     height: 75,
//     borderWidth: 2,
//     margin: 20,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });



//5.5

// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={[styles.flexContainer]}>
//                     <Example style={[styles.darkgrey]}>A 50%</Example>
//                     <Example>B 50%</Example>
//                 </View>
//                 <View style={[styles.flexContainer]}>
//                     <Example style={[styles.darkgrey]}>C 33%</Example>
//                     <Example style={{flex: 2}}>D 66%</Example>
//                 </View>
//                 <View style={[styles.flexContainer]}>
//                     <Example style={[styles.darkgrey]}>E 25%</Example>
//                     <Example style={{flex: 3}}>F 75%</Example>
//                 </View>
//             </View>
//         );
//     }
// }

// const Example = (props) => (
//     <View style={[styles.example,styles.lightgrey,props.style]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1
//     },
//     flexContainer: {
//         width: 150,
//         height: 150,
//         borderWidth: 1,
//         margin: 10
//     },
//     darkgrey: {
//         backgroundColor: '#666666'
//     },
//     lightgrey: {
//         backgroundColor: '#ededed'
//     },
//     example: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
// });



//5. 6

// import React, {Component} from 'react';
// import { StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={[styles.flexContainer]}>
//                     <Example style={[styles.darkgrey]}>A 50%</Example>
//                     <Example>B 50%</Example>
//                 </View>
//                 <View style={[styles.flexContainer]}>
//                     <Example style={[styles.darkgrey]}>C 33%</Example>
//                     <Example style={{flex: 2}}>D 66%</Example>
//                 </View>
//                 <View style={[styles.flexContainer]}>
//                     <Example style={[styles.darkgrey]}>E 25%</Example>
//                     <Example style={{flex: 3}}>F 75%</Example>
//                 </View>
//             </View>
//         );
//     }
// }

// const Example = (props) => (
//     <View style={[styles.example,styles.lightgrey,props.style]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1
//     },
//     flexContainer: {
//         width: 150,
//         height: 150,
//         borderWidth: 1,
//         margin: 10,
//         flexDirection: 'row'
//     },
//     darkgrey: {
//         backgroundColor: '#666666'
//     },
//     lightgrey: {
//         backgroundColor: '#ededed'
//     },
//     example: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
// });


//5.7
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';

// export default class App extends Component{
//     render() {
//         return (
//             <View style={styles.container}>
//                 <FlexContainer style={[{justifyContent: 'center'}]}>
//                     <Example>center</Example>
//                     <Example>center</Example>
//                 </FlexContainer>
//                 <FlexContainer style={[{justifyContent: 'flex-start'}]}>
//                     <Example>flex-start</Example>
//                     <Example>flex-start</Example>
//                 </FlexContainer>
//                 <FlexContainer style={[{justifyContent: 'flex-end'}]}>
//                     <Example>flex-end</Example>
//                     <Example>flex-end</Example>
//                 </FlexContainer>
//                 <FlexContainer style={[{justifyContent: 'space-around'}]}>
//                     <Example>space-around</Example>
//                     <Example>space-around</Example>
//                 </FlexContainer>
//                 <FlexContainer style={[{justifyContent: 'space-between'}]}>
//                     <Example>space-between</Example>
//                     <Example>space-between</Example>
//                 </FlexContainer>
//             </View>
//         );
//     }
// }

// const FlexContainer = (props) => (
//     <View style={[styles.flexContainer,props.style]}>
//         {props.children}
//     </View>
// );

// const Example = (props) => (
//     <View style={[styles.example,props.style]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1
//     },
//     flexContainer: {
//         alignItems: 'stretch',
//         backgroundColor: '#ededed',
//         width: 120,
//         height: 100,
//         borderWidth: 1,
//         margin: 10
//     },
//     example: {
//         width: 120,
//         height: 15,
//         backgroundColor: '#666666'
//     },
// });


//5.8
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={[styles.flexContainer,{alignItems: 'center'}]}>
//                     <Example style={[styles.darkgrey]}>A 50%</Example>
//                     <Example>B 50%</Example>
//                 </View>
//                 <View style={[styles.flexContainer,{alignItems: 'flex-start'}]}>
//                     <Example style={[styles.darkgrey]}>C 33%</Example>
//                     <Example style={{flex: 2}}>D 66%</Example>
//                 </View>
//                 <View style={[styles.flexContainer,{alignItems: 'flex-end'}]}>
//                     <Example style={[styles.darkgrey]}>E 25%</Example>
//                     <Example style={{flex: 3}}>F 75%</Example>
//                 </View>
//             </View>
//         );
//     }
// }

// const Example = (props) => (
//     <View style={[styles.example,styles.lightgrey,props.style]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1
//     },
//     flexContainer: {
//         width: 150,
//         height: 150,
//         borderWidth: 1,
//         margin: 10
//     },
//     darkgrey: {
//         backgroundColor: '#666666'
//     },
//     lightgrey: {
//         backgroundColor: '#ededed'
//     },
//     example: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
// });

//5.9
// import React, { Component } from 'react';
// import { StyleSheet, Text, View} from 'react-native';

// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <FlexContainer style={[]}>
//                     <Example align='auto'>auto</Example>
//                     <Example align='stretch'>stretch</Example>
//                     <Example align='center'>center</Example>
//                     <Example align='flex-start'>flex-start</Example>
//                     <Example align='flex-end'>flex-end</Example>
//                     <Example>default</Example>
//                 </FlexContainer>
//             </View>
//         );
//     }
// }

// const FlexContainer = (props) => (
//     <View style={[styles.flexContainer,props.style]}>
//         {props.children}
//     </View>
// );

// const Example = (props) => (
//     <View style={[styles.example,
//                   styles.lightgrey,
//                   {alignSelf: props.align || 'auto'},
//                   props.style
//     ]}>
//         <Text>
//             {props.children}
//         </Text>
//     </View>
// );

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         alignItems: 'center',
//         flex: 1
//     },
//     flexContainer: {
//         backgroundColor: '#ededed',
//         width: 120,
//         height: 180,
//         borderWidth: 1,
//         margin: 10
//     },
//     example: {
//         height: 25,
//         marginBottom: 5,
//         backgroundColor: '#666666'
//     },
// });


//5.10
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* flexWrap 속성 값에 nowrap으로 지정. 정사각형이 벗어남 */}
        <NoWrapContainer>
          <Example>A nowrap</Example>
          <Example>1</Example>
          <Example>2</Example>
          <Example>3</Example>
          <Example>4</Example>
        </NoWrapContainer>
        {/* flexWrap 속성 값에 wrap으로 지정. 정사각형이 유지되어 새로운 줄에서 시작 */}
        <WrapContainer>
          <Example>B wrap</Example>
          <Example>1</Example>
          <Example>2</Example>
          <Example>3</Example>
          <Example>4</Example>
        </WrapContainer>
      </View>
    );
  }
}

//첫 번째 예에 noWrapContainer 스타일을 적용
const NoWrapContainer = (props) => (
  <View style={[styles.noWrapContainer,props.style]}>
    {props.children}
  </View>
);

// 두 번째 예에 wrapContainer 스타일을 적용
const WrapContainer = (props) => (
  <View style={[styles.wrapContainer,props.style]}>
    {props.children}
  </View>
);

const Example = (props) => (
  <View style={[styles.example,props.style]}>
    <Text>
      {props.children}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1
  },
  //flexDirection 속성에는 row, flexWrap 속성에는 nowrap을 지정
  noWrapContainer: {
    backgroundColor: '#ededed',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    borderWidth: 1,
    margin: 10
  },
  
  //flexDirection 속성에는 row, flexWrap 속성에는 wrap을 지정
  wrapContainer: {
    backgroundColor: '#ededed',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    margin: 10
  },
  example: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#666666'
  },
});