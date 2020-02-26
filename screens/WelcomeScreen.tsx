import * as React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import {KeleyaBackground, VertMiddle,VertBottom} from './elements'
import {styles} from './styles'
strings = require('./strings.json')


function WelcomeScreen({navigation}){
  return(
			<KeleyaBackground>
				<VertMiddle>
	                <View style={styles.field}>
						<Text style={styles.textVeryBig}>{strings.WelcomeScreen.title}</Text>
					</View>
				</VertMiddle> 
				<VertBottom navigation={navigation} next='Goals'>
            	</VertBottom>

			</KeleyaBackground>
  )
}

export default connect()(WelcomeScreen)

