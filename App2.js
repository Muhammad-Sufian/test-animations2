
import React from 'react';
import { View, Text, PanResponder, Animated, Dimensions, ScrollView } from 'react-native';
import Swipe from './src/Swipe'
import Swipe_List from './src/Swipe_List'
import Swipe_Stack from './src/Swipe_Stack'

class App extends React.Component {
  state = {
    cart: [
      {
        price: 12,
        name: 'apple',
      },
      {
        price: 14,
        name: 'mangoe',
      },
      {
        price: 8,
        name: 'book',
      },
      {
        price: 7,
        name: 'carrot',
      },
      {
        price: 38,
        name: 'eggs',
      },
      {
        price: 17,
        name: 'bread',
      },
      {
        price: 44,
        name: 'coconut',
      },
      {
        price: 89,
        name: 'bag',
      },
    ]
  }


  render() {

    let items_list = this.state.cart.map((item, index) => {
      return (
        <Swipe_List  key={index} item_index={index} list={this.state.cart} updated_list={(list) => this.setState({ cart: list })}>
          <View style={{ marginTop: 50, height: 150, width: 200, backgroundColor: 'purple', alignSelf: 'center', marginTop: 15, justifyContent: 'center',borderRadius:8,borderWidth:1}}>
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>{item.name}</Text>
          </View>
        </Swipe_List>
      )
    }
    )

    let items_stack = this.state.cart.map((item, index) => {
      return (
        <Swipe_Stack  key={index} item_index={index} list={this.state.cart} updated_list={(list) => this.setState({ cart: list })}>
          <View style={{ height: 150, width: 300, backgroundColor: 'purple', alignSelf: 'center', marginTop: 15, justifyContent: 'center',borderRadius:8,borderWidth:1}}>
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>{item.name}</Text>
          </View>
        </Swipe_Stack>
      )
    }
    )



    return (
      <ScrollView style={{ flex: 1,backgroundColor:'white' }}>
        <View style={{backgroundColor:'green',height:250}}>
        {items_stack}
        </View>
        
      </ScrollView>

    );
  }

};

// class App extends React.Component {
//   state = {
//     cart: [
//       'apple',
//       'mangoe',
//       'carrot',
//       'eggs',
//       'bread',
//       'coconut',
//       'bag'
//     ]
//   }

//   delete=(delete_index)=>{
//     console.log(delete_index,'deleted')
//     let whats_remaining=this.state.cart.filter((item,index)=>index!=delete_index)
//     console.log(whats_remaining)
//     this.setState({cart:whats_remaining})
//   }
//   render() {

//     let items = this.state.cart.map((item, index) => 
//       <Swipe key={item} delete={this.delete} item_index={index}>
//         <View style={{marginTop: 50, height: 150, width: 200, backgroundColor: 'purple', alignSelf: 'center', marginTop: 15, justifyContent: 'center' }}>
//           <Text style={{ alignSelf: 'center', fontSize: 18 }}>{item}</Text>
//         </View>
//       </Swipe>
//     )
//     console.log(items)


//     return (
//       <ScrollView style={{flex:1}}>
//         {items}
//       </ScrollView>

//     );
//   }

// };

//=====================================
// class App extends React.Component {
//   state = {
//     position: new Animated.ValueXY(0, 0),
//     should_respond: true,
//     rotate: 0,
//     opacity:new Animated.Value(1),

//   }
//   panResponder = PanResponder.create({
//     onMoveShouldSetPanResponder: () => this.state.should_respond,
//     onPanResponderMove: (event, gesture) => {

//       console.log(gesture)
//       let new_opacity=this.state.opacity.__getValue()-0.05
//       this.state.opacity.setValue(new_opacity)

//       if (gesture.dx > 0) {
//         let new_x = this.state.position.x.__getValue() + (10)

//         this.state.position.setValue({ x: new_x, y: 0 })
//         this.setState({ rotate: this.state.rotate + 3,})
//       } else {
//         let new_x = this.state.position.x.__getValue() - (10)

//         this.state.position.setValue({ x: new_x, y: 0 })
//         this.setState({ rotate: this.state.rotate - 3})
//       }



//     },
//     onPanResponderRelease: (event, gesture) => {
//       this.state.position.flattenOffset();
//       if (gesture.dx < 150&&gesture.dx > -150 ) {
//         this.setState({ rotate: 0})
//         this.state.position.setValue({ x: 0, y: 0 })
//         this.state.opacity.setValue(1)
//       } else {
//         Animated.parallel([
//           Animated.timing(this.state.opacity,{
//             toValue:0,
//             duration:100,
//             useNativeDriver:false

//           }),
//           Animated.timing(this.state.position,{
//             toValue:{x:3000,y:0},
//             duration:1000,
//             useNativeDriver:false

//           })
//         ]).start()

//       }
//       // console.log(gesture.dx)
//       // if(gesture.dx<60){
//       //   console.log('dragged to right')

//       // }else{
//       //   this.state.position.setValue({x:0,y:0})
//       // }
//     }
//   })




//   render() {
//     // var spin = this.state.rotate.interpolate({
//     //   inputRange:[0,360],
//     //   outputRange:['0deg','360deg']
//     // })
//     var spin = this.state.rotate + 'deg'

//     return (
//       <Animated.View style={[{
//         height: 150, width: 200, backgroundColor: 'purple', alignSelf: 'center', marginTop: 50, transform: [{ rotateZ: spin }],opacity:this.state.opacity

//       }, this.state.position.getLayout()]} {...this.panResponder.panHandlers}>
//         <Text>abc</Text>
//       </Animated.View>

//     );
//   }

// };


//==============================
// class App extends React.Component {
//   state={
//     boxes:[1,2,3,4],
//     position: [1,2,3,4].map(()=>new Animated.ValueXY(0,0)),
//     should_respond:true,

//   }
//   panResponder = this.state.boxes.map((item,index)=>
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => this.state.should_respond,
//       onPanResponderMove: (event,gesture)=>{
//         let new_x=this.state.position[index].x.__getValue()+(gesture.dx/5)
//         let new_y=this.state.position[index].y.__getValue()+(gesture.dy/5)
//         console.log(gesture)
//         this.state.position[index].setValue({x:new_x,y:new_y})

//       },
//     })
//   )



//   render(){
//     let cards = this.state.boxes.map((item,index)=>
//       <Animated.View key={index} style={[{height:150,width:150,backgroundColor:'purple',

//       },this.state.position[index].getLayout()]} {...this.panResponder[index].panHandlers}>
//         <Text>abc</Text>
//       </Animated.View>
//     )

//     return (
//       <View>
//         {cards}
//       </View>

//     );
//   }

// };


//======================================
// class App extends React.Component {
//   state={
//     position:new Animated.ValueXY(0,0),
//     should_respond:true
//   }
//   panResponder = PanResponder.create({
//     onMoveShouldSetPanResponder: () => this.state.should_respond,
//     onPanResponderMove: (event,gesture)=>{
//       let new_x=this.state.position.x.__getValue()+(gesture.dx/5)
//       let new_y=this.state.position.y.__getValue()+(gesture.dy/5)
//       console.log(new_x)
//       this.state.position.setValue({x:new_x,y:new_y})


//     },
//     // onPanResponderRelease: (event,gesture) => {
//     //   this.setState({should_respond:true})

//     // }
//   });

//   render(){
//     return (
//       <Animated.View style={[{height:150,width:150,backgroundColor:'purple',

//       },this.state.position.getLayout()]} {...this.panResponder.panHandlers}>
//         <Text>abc</Text>
//       </Animated.View>
//     );
//   }

// };


// class App extends React.Component {
//   state={
//     position:new Animated.ValueXY(0,0),
//     should_respond:true
//   }
//   panResponder = PanResponder.create({
//     onMoveShouldSetPanResponder: () => this.state.should_respond,
//     onPanResponderMove: (event,gesture)=>{
//       let new_x=this.state.position.x.__getValue()+gesture.dx
//       let new_y=this.state.position.y.__getValue()+gesture.dy
//       console.log(new_x)
//       this.state.position.setValue({x:new_x,y:new_y})


//     },
//     // onPanResponderRelease: (event,gesture) => {
//     //   this.setState({should_respond:true})

//     // }
//   });

//   render(){
//     return (
//       <Animated.View style={[{height:150,width:150,backgroundColor:'purple',

//       },this.state.position.getLayout()]} {...this.panResponder.panHandlers}>
//         <Text>abc</Text>
//       </Animated.View>
//     );
//   }

// };

// class App extends React.Component {
//   state={
//     position:new Animated.ValueXY(0,0),
//     pos_y:new Animated.Value(0),
//     prev_x:0,
//     prev_y:0,
//     should_respond:true
//   }
//   panResponder = PanResponder.create({
//     onMoveShouldSetPanResponder: () => this.state.should_respond,
//     onPanResponderMove: (event,gesture)=>{
//       this.setState({should_respond:true})
//       // console.log(this.state.pos_x.__getValue())
//       let ges_x= gesture.dx
//       let ges_y= gesture.dy
//       if(gesture.dx>50){
//         ges_x=50
//       }
//       if(gesture.dx<-50){
//         ges_x=-50
//       }
//       if(gesture.dy>50){
//         ges_y=50
//       }
//       if(gesture.dy<-50){
//         ges_y=-50
//       }

//       var new_x=this.state.position.x.__getValue() + ges_x
//       var new_y=this.state.position.y.__getValue() + ges_y
//       console.log(new_y)

//       //so it wont go outside screen
//       if(new_x<0){
//         new_x=0
//       }
//       if(new_y<0){
//         new_y=0
//       }
//       if(new_x>Dimensions.get('window').width-150){
//         new_x=Dimensions.get('window').width-150
//       }
//       if(new_y>Dimensions.get('window').height-150){
//         new_y=Dimensions.get('window').height-150
//       }

//       Animated.spring(this.state.position,{
//         toValue:{x:new_x,y:new_y},
//         duration:1000,
//         useNativeDriver:false
//       }).start()

//     },
//     // onPanResponderRelease: (event,gesture) => {
//     //   this.setState({should_respond:true})

//     // }
//   });

//   render(){
//     return (
//       <Animated.View style={[{height:150,width:150,backgroundColor:'purple',

//       },this.state.position.getLayout()]} {...this.panResponder.panHandlers}>
//         <Text>abc</Text>
//       </Animated.View>
//     );
//   }

// };

export default App;
