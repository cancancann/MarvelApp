import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../constant/theme'

const SignUpScreen = () => {
  return (
    <View style={{backgroundColor:COLORS.black,flex:1}}>
      <Text style={{color:COLORS.white}}>SignUpScreen</Text>
    </View>
  )
}

export default SignUpScreen