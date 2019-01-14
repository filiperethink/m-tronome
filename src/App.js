/**
 * M-tronome Open Source App
 * https://github.com/everton0991/m-tronome
 *
 * @format
 * @flow
 */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

type Props = {}

export default class App extends Component<Props> {
  componentDidMount() {
    console.log('Mounted')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to M-tronome!</Text>
      </View>
    )
  }
}
