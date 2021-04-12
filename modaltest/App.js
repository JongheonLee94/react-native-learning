import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer'; // DrawerContentScrollView,DrawerItemList,DrawerItem 3개를 추가해줍니다.
import { NavigationContainer,DrawerActions } from '@react-navigation/native'; //DrawerActions 추가

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() =>  navigation.openDrawer()}
        title="Go to openDrawer"
      />
      <Button
        onPress={() =>  navigation.toggleDrawer()}
        title="Go to toggleDrawer"
      />
      <Button
        onPress={() =>  navigation.closeDrawer()}
        title="Go to closeDrawer"
      />
     

    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function CustomDrawerContent(props) { //커스텀 드로어 함수를 만듭니다,
  return (
    <DrawerContentScrollView {...props}> 
      <DrawerItemList {...props}  //페이지들
      /> 
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())} //dipatch로 DrawerActions을 추가해줍니다.
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} //drawerContent에 커스텀 드로어를 추가해줍니다.
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}