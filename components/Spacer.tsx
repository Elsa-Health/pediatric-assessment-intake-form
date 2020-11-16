import React from 'react'
import {View} from 'react-native'

export function Spacer({ size }) {
    return <View style={{ marginVertical: size ? size : null }} />;
  }
  