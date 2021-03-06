// import React from 'react'
// import Home from './Home'
// import Toolbar from './Toolbar'

// function getScene (scene) {
//   switch (scene) {
//     case 'Home':
//       return Home
//     case 'Toolbar':
//       return Toolbar
//     default:
//       return Home
//   }
// }

// const App = (props) => {
//   const Scene = getScene(props.scene)
  
//   return (
//     <Scene openDrawer={props.openDrawer} jump={props.jump} />
//   )
// }
// export default App


//11.8 
// import React from 'react'
// import Home from './Home'
// import Toolbar from './Toolbar'
// import ViewPagerComponent from './ViewPagerComponent'

// function getScene (scene) {
//   switch (scene) {
//     case 'Home':
//       return Home
//     case 'Toolbar':
//       return Toolbar
//     case 'ViewPager':
//       return ViewPagerComponent
//     default:
//       return Home
//   }
// }

// const App = (props) => {
//   const Scene = getScene(props.scene)
//   return (
//     <Scene openDrawer={props.openDrawer} jump={props.jump} />
//   )
// }

// export default App

//11.10
// import React from 'react'
// import Home from './Home'
// import Toolbar from './Toolbar'
// import ViewPagerComponent from './ViewPagerComponent'
// import DatePicker from './DatePicker'

// function getScene (scene) {
//   switch (scene) {
//     case 'Home':
//       return Home
//     case 'Toolbar':
//       return Toolbar
//     case 'ViewPager':
//       return ViewPagerComponent
//     case 'DatePicker':
//       return DatePicker
//     default:
//       return Home
//   }
// }

// const App = (props) => {
//   const Scene = getScene(props.scene)
//   return (
//     <Scene openDrawer={props.openDrawer} jump={props.jump} />
//   )
// }

// export default App


//11.12
// import React from 'react'
// import Home from './Home'
// import Toolbar from './Toolbar'
// import ViewPagerComponent from './ViewPagerComponent'
// import DatePicker from './DatePicker'
// import TimePicker from './TimePicker'

// function getScene (scene) {
//   switch (scene) {
//     case 'Home':
//       return Home
//     case 'Toolbar':
//       return Toolbar
//     case 'ViewPager':
//       return ViewPagerComponent
//     case 'DatePicker':
//       return DatePicker
//     case 'TimePicker':
//       return TimePicker
//     default:
//       return Home
//   }
// }

// const App = (props) => {
//   const Scene = getScene(props.scene)
//   return (
//     <Scene openDrawer={props.openDrawer} jump={props.jump} />
//   )
// }

// export default App


//11.14

import React from 'react'
import Home from './Home'
import Toast from './Toast'

function getScene (scene) {
  switch (scene) {
    case 'Home':
      return Home
    case 'Toast':
      return Toast
    default:
      return Home
  }
}

const App = (props) => {
  const Scene = getScene(props.scene)
  return (
    <Scene openDrawer={props.openDrawer} jump={props.jump} />
  )
}

export default App
