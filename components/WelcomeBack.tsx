import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WelcomeBack = () => {
  return (
    <View style={styles.container}>
        <Text>Welcome back</Text>
        <Text>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },    
})

export default WelcomeBack