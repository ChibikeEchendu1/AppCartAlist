import React, {Component} from 'react'
import {View, Text,ScrollView,Dimensions} from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SCREENWIDTH = Dimensions.get('window').width;


class Slides extends Component{

    renderLastSlide(index){
        if (index === this.props.data.length -1) {
            return(
                <View>
                <Button 
                type='outline'
                title="Log In "  raised onPress={this.props.onComplete} icon={
                    <Icon
                      name="arrow-right"
                      size={15}
                      color= "#6A6A6A"
                    />
                  }
                  containerStyle={{marginTop:10,alignSelf:'center',width:100}}
                  titleStyle={{color:'#6A6A6A'}}
                  iconRight />

                  <Button 
                type='outline'
                title="Sign Up "  raised onPress={this.props.onCompleteSign} icon={
                    <Icon
                      name="arrow-right"
                      size={15}
                      color= "#6A6A6A"
                    />
                  }
                  containerStyle={{marginTop:10,alignSelf:'center',width:100}}
                  titleStyle={{color:'#6A6A6A'}}
                  iconRight />
                  </View>
            )
        }
    }

    renderSlides(){
        return this.props.data.map((slides,index) =>{ 
            console.log(slides.text);
            
            return(<View style={[styles.slide,{backgroundColor:slides.color}]} key={slides.text}>
                    <Text style={styles.slideText}>{slides.text}  <Icon
                      name=  {slides.icon}
                      size={25}
                      color="white"
                    /> </Text>
                    {this.renderLastSlide(index)}
                </View>
                );
            
        });
    }

    render(){
        return(
            <ScrollView pagingEnabled horizontal >
            {this.renderSlides()}
         </ScrollView>
        )
    }
}

const styles = {
    slide:{
        //display:'flex',
        flex:1,
        width:SCREENWIDTH,
        justifyContent:'center',
        alignItems:'center'
    },
    slideText: {
        fontSize: 25,
        color:'white',
        marginBottom:30
    },
    ButtonStyle: {
        color: '#0288D1',
        marginTop: 20
    }
}

export default Slides;