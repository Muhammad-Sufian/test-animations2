
import React from 'react';
import { View, Text, PanResponder, Animated, Dimensions } from 'react-native';

export default class Swipe extends React.Component {
    state = {
        position: new Animated.ValueXY(0, 0),
        rotate: '0deg',
        opacity: 1,

    }
    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {

            let width = Dimensions.get('window').width
            let opacity = this.state.position.x.interpolate({
                inputRange: [-width, 0, width],
                outputRange: [0, 1, 0]
            })

            let spin = this.state.position.x.interpolate({
                inputRange: [-width, 0, width],
                outputRange: ['-100deg', '0deg', '100deg']
            })
            this.setState({ rotate: spin, opacity: opacity })

            if (gesture.dx > 0) {
                let new_x = this.state.position.x.__getValue() + (3)

                this.state.position.setValue({ x: new_x, y: 0 })
            } else {
                let new_x = this.state.position.x.__getValue() - (3)

                this.state.position.setValue({ x: new_x, y: 0 })
            }



        },
        onPanResponderRelease: (event, gesture) => {
            this.state.position.flattenOffset();
            if (gesture.dx < 150 && gesture.dx > -150) {

                //without animation, sudden reset
                // this.state.position.setValue({ x: 0, y: 0 })

                //with animation smooth reset
                Animated.spring(this.state.position, {
                    toValue: { x: 0, y: 0 },
                    duration: 2000,
                    useNativeDriver: false
                }).start()
            } else {

                if (gesture.dx < 0) {
                    Animated.timing(this.state.position, {
                        toValue: { x: -3000, y: 0 },
                        duration: 2000,
                        useNativeDriver: false

                    }).start()
                } else {
                    Animated.timing(this.state.position, {
                        toValue: { x: 3000, y: 0 },
                        duration: 2000,
                        useNativeDriver: false

                    }).start()
                }
                setTimeout(() => this.delete(this.props.item_index), 500)



            }
        }
    })

    delete=(delete_index)=>{

        let whats_remaining=this.props.list.filter((item,index)=>index!=delete_index)

        let original_list=[]
        for(let i= whats_remaining.length-1;i>=0;i--){
            original_list =[...original_list,whats_remaining[i]]
        }

        //resetting the values because the next item will be assigned the properties of this item

        this.state.position.setValue({ x: 0, y: 0 })
        this.setState({rotate: '0deg',opacity: 1,})

        this.props.updated_list(original_list)
        
      }

    render() {
        return (
            <Animated.View style={[{justifyContent:'center',alignSelf: 'center',  transform: [{ rotateZ: this.state.rotate },{translateY:-155*(this.props.item_index)}], opacity: this.state.opacity
            }, this.state.position.getLayout()]} {...this.panResponder.panHandlers}>
                {this.props.children}
            </Animated.View>

        );
    }

};
