
import React from 'react';
import { View, Text, PanResponder, Animated, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Swipe from './src/Swipe'
import Swipe_List from './src/Swipe_List'
import Swipe_Stack from './src/Swipe_Stack'

export default class App extends React.Component {
    static defaultProps = {
        check:()=>{}
    }
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

    let items_reversed=[]
    for(let i=this.state.cart.length-1;i>=0;i--){
        items_reversed=[...items_reversed,this.state.cart[i]]
    }

    let items_stack = items_reversed.map((item, index) => {
      return (
        <Swipe_Stack  key={index} item_index={index} list={items_reversed} updated_list={(list) =>this.setState({ cart: list })}>
          <View style={{ height: 150, width: 300, backgroundColor: 'purple', alignSelf: 'center', marginTop: 15, justifyContent: 'center',borderRadius:8,borderWidth:1}}>
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>{item.name}</Text>
          </View>
        </Swipe_Stack>
      )
    }
    )

    



    return (
        <>
        <TouchableOpacity onPress={()=>console.log(this.check())} >
        <Text>Press</Text>
</TouchableOpacity>
      <ScrollView style={{ flex: 1,backgroundColor:'white' }}>
        <View style={{height:250}}>
        {items_stack}
        </View>
        
      </ScrollView>
      
      </>

    );
  }

};


/*
===================================================
LIST SWIPE:

export default class App extends React.Component {
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



    return (
      <ScrollView style={{ flex: 1,backgroundColor:'white' }}>
        {items_list}
        
      </ScrollView>

    );
  }

};
===================================================
STACK SWIPE:

export default class App extends React.Component {
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

===================================================


*/
