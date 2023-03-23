import React from 'react';
import { View,Image, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image resizeMode='contain' style={styles.logo} source={require('../assets/Marvel-Logo.png')} />
      </View>
    </View>
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