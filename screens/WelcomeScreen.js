import React from 'react';
import { View,Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Slide")} activeOpacity={1} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image resizeMode='contain' style={styles.logo} source={require('../assets/Marvel-Logo.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed1d24',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default WelcomeScreen;