import * as React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import {KeleyaBackground, VertMiddle,VertBottom} from '../elements'
strings = require('./strings.json')


function WelcomeScreen({navigation}){
  return(
			<KeleyaBackground>
				<VertMiddle>
	                <View style={{backgroundColor:'white', width:'100%', alignItems:'center'}}>
						<Text style={{fontSize: 20}}>{strings.WelcomeScreen.title}</Text>
					</View>
				</VertMiddle> 
				<VertBottom navigation={navigation} next='Goals'>
            	</VertBottom>

			</KeleyaBackground>
  )
}

export default connect()(WelcomeScreen)

