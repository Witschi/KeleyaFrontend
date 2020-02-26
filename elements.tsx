import * as React from 'react';
import { View, ImageBackground, Button } from 'react-native';


export function KeleyaBackground(props){
    return(
            <ImageBackground style={{height: "100%" }}
                source={require('./assets/bg2.png')}
            >   
                {props.children}
            </ImageBackground>
    )
}

export function VertMiddle(props){
	if(typeof(props.pos) == "undefined")
		pos="center"
	else  pos=props.pos
	return(
            <View style={{
                justifyContent: "center",
                alignItems: pos,
                flex: 1
            }}> 
                {props.children}
            </View>
    )
}

export function VertBottom(props){
    return(
            <View style={{
                justifyContent: "flex-end",
                backgroundColor:'0xFFFFFF',
            }}>
                <View style={{alignItems: "center"}}>
                    {props.children}
                </View>
                {typeof(props.next) != 'undefined' && <Button
                     title="continue"
                    onPress={() => props.navigation.navigate(props.next)}
                />}
            </View>
    )
}

