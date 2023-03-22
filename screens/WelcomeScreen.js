import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image resizeMode='contain' style={styles.logo} source={require('../assets/Marvel-Logo.png')} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to Marvel Community</Text>
        <Text style={styles.subtitle}>Explore the Marvel Universe</Text>
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
  textContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
  },
});

export default WelcomeScreen;