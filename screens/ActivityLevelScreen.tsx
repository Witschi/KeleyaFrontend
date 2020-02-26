import * as React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import { setActivity } from '../actions'
import {KeleyaBackground, VertMiddle,VertBottom} from './elements'
import Slider from '@react-native-community/slider';
import {styles} from './styles'
strings = require('./strings.json')

function ActivityLevelScreen({navigation,dispatch,level}){
  return(
            <View style={{height:'100%', backgroundColor:'white', padding:0}}>
			<View style={styles.field}>
                    <Text style={[styles.field,styles.textNormal,{textAlign: 'center', paddingTop:40}]}>{strings.ActivityLevelScreen.title}</Text>
			</View>
			<VertMiddle>
                <View style={{padding:0}}>
					<ImageBackground style={[styles.field,{
						resizeMode:'cover',
						height:"100%",
			        }]}
					 source={require('../assets/clouds2x.png')}>
						  <Slider
							    style={{width: 400, height: 40, transform: [ { rotate: "-90deg"},{translateX:-200} ]}}
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
                    <Text style={[styles.field,styles.textNormal,{textAlign:'center'}]}>{strings.ActivityLevelScreen.levels[level-1]}</Text>
                </View>
            </VertBottom>
</View>
  )
}

const mapStateToProps = state => ({
	level:state.level
})

export default connect(mapStateToProps)(ActivityLevelScreen)

