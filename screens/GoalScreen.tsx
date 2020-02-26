import * as React from 'react';
import { Image,View, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { connect } from 'react-redux'
import { toggleGoal } from '../actions'
import {KeleyaBackground, VertMiddle,VertBottom} from './elements'
import { CheckBox } from 'react-native-elements'
import {styles} from './styles'

function MyCheckBox(props){
	return(
		<CheckBox
		  containerStyle={[styles.field,{alignItems:'flex-start', backgroundColor:"rgba(255,255,255,0.9)"}]}
		  textStyle={styles.textNormal}
		  title={props.title}
		  checkedIcon={<Image source={require('../checked.png')} />}
		  uncheckedIcon={<Image source={require('../unchecked.png')} />}
		  checked={props.checked}
		  onPress={props.onPress}
/>
	)
}

function GoalScreen({navigation,dispatch,goals}){
  return(
		<KeleyaBackground>

			<VertMiddle pos='flex-start'>
			</VertMiddle>
            <VertBottom navigation={navigation} next='DueDate'>

           <View style={{width:'100%'}}>
			<View style={[styles.field,{backgroundColor:"rgba(255,255,255,0.9)"}]}>
			<Text style={[styles.textVeryBig,{paddingBottom:20}]}>{strings.GoalScreen.title}</Text>
            <Text style={[styles.textNormal,{paddingBottom:30}]}>{strings.GoalScreen.subtitle}</Text>
			</View>
			<MyCheckBox checked={goals['find_workouts']} title={strings.GoalScreen['find_workouts']} onPress={() => dispatch(toggleGoal('find_workouts'))}/>
            <MyCheckBox checked={goals['maintain_weight']} title={strings.GoalScreen['maintain_weight']} onPress={() => dispatch(toggleGoal('maintain_weight'))}/>
            <MyCheckBox checked={goals['birth_preparation']} title={strings.GoalScreen['birth_preparation']} onPress={() => dispatch(toggleGoal('birth_preparation'))}/>
            <MyCheckBox checked={goals['feel_relaxed']} title={strings.GoalScreen['feel_relaxed']} onPress={() => dispatch(toggleGoal('feel_relaxed'))}/>

			</View>

            </VertBottom>
        </KeleyaBackground>
  )
}


const mapStateToProps = state => ({
    goals:state.goals
})

export default connect(mapStateToProps)(GoalScreen)

