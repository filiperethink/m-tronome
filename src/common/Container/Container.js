/**
 * @flow
 */
import React from 'react'
import { View } from 'react-native'
import styles from './styles'

type Props = {
  children: React.Node
}

const Container = (props: Props) => {
  const { children } = props

  return (
    <View style={styles.container}>{children}</View>
  )
}

export default Container
