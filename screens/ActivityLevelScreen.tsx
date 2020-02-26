import * as React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import { setActivity } from '../actions'
import {KeleyaBackground, VertMiddle,VertBottom} from '../elements'
import Slider from '@react-native-community/slider';
strings = require('./strings.json')

function ActivityLevelScreen({navigation,dispatch,level}){
  return(
            <View style={{height:'100%', backgroundColor:'white'}}>
			<View style={{justifyContent:'center', alignItems:'center'}}>
                    <Text style={{textAlign: 'center', paddingTop:40,fontSize:20, width:'100%',justifyContent:'center'}}>{strings.ActivityLevelScreen.title}</Text>
			</View>
			<VertMiddle>
                <View style={{backgroundColor:'white', width:'100%', alignItems:'center'}}>
					<ImageBackground style={{
						alignItems:'center',
						backgroundColor:'white',
						resizeMode:'cover',
			            width: "100%",
						height:"100%",
						border:1,
						borderColor:'black'
			        }}
					 source={require('../assets/clouds2x.png')}>
						  <Slider
							    style={{borderWidth:1, orderColor:'black',width: 400, height: 40, transform: [ { rotate: "-90deg"},{translateX:-200} ]}}
							    minimumValue={1}
							    maximumValue={5}
								step={1}
					    		minimumTrackTintColor="#FFFFFF"
							    maximumTrackTintColor="#000000"
								value={level}
	                		    onValueChange={(level) => {
	                            	dispatch(setActivity(level))
	                    		}}
				  			/>
					</ImageBackground>
				</View>
            </VertMiddle>

			<VertBottom navigation={navigation} next='Finish'>
                <View style={{backgroundColor:'white', width:'100%', alignItems:'center'}}>
                    <Text style={{fontSize:20, paddingBottom:10}}>{strings.ActivityLevelScreen.levels[level-1]}</Text>
                </View>
                <View style={{backgroundColor:'white', width:'100%', alignItems:'center'}}>
                </View>
            </VertBottom>
</View>
  )
}

const mapStateToProps = state => ({
	level:state.level
})

export default connect(mapStateToProps)(ActivityLevelScreen)

