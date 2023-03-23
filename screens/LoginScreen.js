import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../constant/theme'

const LoginScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.black}}>
      <Text style={{color:COLORS.white}}>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen