import React from 'react'
import { Image, View } from 'react-native'

const Pearl = ({width} : {width: number}) => {
  return (
    <View>
      <Image source={require('../../assets/pearl.png')} style={{width: width, height: width, marginBottom: -20}} />
    </View>
  )
}



export default Pearl