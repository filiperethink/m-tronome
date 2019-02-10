/**
 * @flow
 */
import React from 'react'
import { View } from 'react-native'
import styles from './styles'

type Props = {
  children: React.Node,
  style: Object
}

const Wrapper = (props: Props) => {
  const { children, style } = props

  return (
    <View style={[styles.wrapper, style]}>{children}</View>
  )
}

export default Wrapper
