import * as React from 'react';
import { View, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { connect } from 'react-redux'
import { setDueDate } from '../actions'
import {KeleyaBackground, VertMiddle,VertBottom} from '../elements'
strings = require('./strings.json')


function FinishScreen({navigation,dispatch,state}){
  return(
		<KeleyaBackground>
			<VertMiddle>
				<View style={{width:'100%', padding:20, backgroundColor: 'white', alignItems:'flex-start'}}>
					{  Object.values(state.goals).some( (element)=>element)?
						<>
		                <Text style={{fontSize:25}}>Your Goals are:</Text> 
						{	
								Object.entries(state.goals).map(([key,value]) => 
									state.goals[key] == true ? <Text style={{fontSize:20}} key={key}>- {strings.GoalScreen[key]}</Text>:null)
						}<View style={{height:20}}/></>
					  : null
					}
                    <Text style={{paddingTop:0, fontSize:25}}>Your Due date is:</Text> 
                    <Text style={{fontSize:20}}>{state.date.toDateString()}</Text> 
                    <Text style={{paddingTop:20, fontSize:25}}>Your activity level is:</Text>
                    <Text style={{fontSize:20}}>{strings.ActivityLevelScreen.levels[state.level-1]}</Text>
				</View>
            </VertMiddle>
		</KeleyaBackground>
  )
}

const mapStateToProps = state => ({
	state
})

export default connect(mapStateToProps)(FinishScreen)

