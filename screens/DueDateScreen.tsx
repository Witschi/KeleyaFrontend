import * as React from 'react';
import { View, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { connect } from 'react-redux'
import { setDueDate } from '../actions'
import {KeleyaBackground, VertMiddle,VertBottom} from '../elements'
strings = require('./strings.json')


function DueDateScreen({navigation,dispatch,date}){
  return(
		<KeleyaBackground>

			<VertMiddle>
            </VertMiddle>

			<VertBottom navigation={navigation} next='ActivityLevel'>
                <View style={{backgroundColor:'white', width:'100%', alignItems:'center'}}>
                    <Text style={{fontSize:20}}>{strings.DueDateScreen.title}</Text>
                </View>
                <View style={{backgroundColor:'white', width:'100%', alignItems:'center'}}>
                    <DatePicker
						minimumDate={new Date()}
						maximumDate={new Date((new Date()).setMonth((new Date()).getMonth()+9))}
                        date={date}
                        onDateChange={(date) => {
                            dispatch(setDueDate(date))
                        }}
                      mode="date"
                    />
                </View>
            </VertBottom>
        </KeleyaBackground>
  )
}

const mapStateToProps = state => ({
    date:state.date
})

export default connect(mapStateToProps)(DueDateScreen)

