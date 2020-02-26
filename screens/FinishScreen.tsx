import * as React from 'react';
import { View, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { connect } from 'react-redux'
import { setDueDate } from '../actions'
import {KeleyaBackground, VertMiddle,VertBottom} from './elements'
import {styles} from './styles'
strings = require('./strings.json')


function FinishScreen({navigation,dispatch,state}){
  return(
		<KeleyaBackground>
			<VertMiddle>
				<View style={{width:'100%', padding:20, backgroundColor: 'white', alignItems:'flex-start'}}>
					{  Object.values(state.goals).some( (element)=>element)?
						<>
		                <Text style={styles.textBig}>Your Goals are:</Text> 
						{	
								Object.entries(state.goals).map(([key,value]) => 
									state.goals[key] == true ? <Text style={styles.textNormal} key={key}>- {strings.GoalScreen[key]}</Text>:null)
						}<View style={{height:20}}/></>
					  : null
					}
                    <Text style={[styles.textBig,{paddingTop:0}]}>Your Due date is:</Text> 
                    <Text style={styles.textNormal}>{state.date.toDateString()}</Text> 
                    <Text style={[styles.textBig,{paddingTop:20}]}>Your activity level is:</Text>
                    <Text style={styles.textNormal}>{strings.ActivityLevelScreen.levels[state.level-1]}</Text>
				</View>
            </VertMiddle>
		</KeleyaBackground>
  )
}

const mapStateToProps = state => ({
	state
})

export default connect(mapStateToProps)(FinishScreen)

